const functions = require("firebase-functions");
const Razorpay = require("razorpay");
const cors = require("cors")({origin: true});

const razorpay = new Razorpay({
  key_id: "rzp_test_pjLZOSt4nnkqTG",
  key_secret: "cQej594ZTw2AxDhupTp5nU4S",
});

exports.createQrCode = functions.https.onRequest((req, res) => {
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
        expire_by: Math.floor(Date.now() / 1000) + 600, // 10 minutes
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send({error: error.message});
    }
  });
});
