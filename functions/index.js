/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { response } = require("express");
const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const cors = require("cors")({
  origin: "http://localhost:3000",
});
const Razorpay = require("razorpay");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const razorpay = new Razorpay({
    key_id: "rzp_test_pjLZOSt4nnkqTG",
    key_secret: "cQej594ZTw2AxDhupTp5nU4S",
    headers: {'Content-Type': 'application/json'} 
})

exports.createQrCode = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const {amount, description} = req.body;

      const response = await razorpay.qrCode.create({
        type: "upi_qr",
        name: "Payment to YourApp",
        usage: "single_use",
        fixed_amount: true,
        payment_amount: amount * 100, // in paise
        description: description || "QR Payment",
        close_by: Math.floor(Date.now() / 1000) + 120 + 10
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({error: error.message});
    }
  });
});

exports.checkPaymentStatus = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { qr_code_id } = req.body;

      const payments = await razorpay.qrCode.fetchAllPayments(qr_code_id);
      
      // Check if at least 1 payment is made
      if (payments.items && payments.items.length > 0 && payments.items[0].status === 'captured') {
        res.send({ paid: true, payment: payments.items[0] });
      } else {
        res.send({ paid: false });
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });
});