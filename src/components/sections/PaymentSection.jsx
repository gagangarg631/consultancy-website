import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import db from "../../firebase";
import Spinner from "../Spinner";
import PaymentSuccessPopup from "../PaymentSuccessPopup";
import CountdownTimer from "../CountdownTimer";
import { checkPaymentStatus, createQRCode } from "../../services/razorpay/payments";
import { createBooking } from "../../services/firestore/bookings";


const PaymentSection = () => {
    const location = useLocation();

    const { amount, title, formData } = location.state;
    const [qrLoaded, setQRLoaded] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [qrData, setQRData] = useState({});

    const startStatusCheck = async () => {
        const bookingData = {
            name: formData.name,
            serviceName: title,
            date: formData.date,
            time: formData.time
        }
        const res = await checkPaymentStatus(qrData.id, bookingData);
        if (!res?.data?.paid) {
            const booking = await createBooking(formData);
            setPaymentSuccess(true);
        }
    }

    const imageLoaded = () => {
        setQRLoaded(true);
        startStatusCheck();
    }

    const generateQRCode = async () => {
        const res = await createQRCode({ amount, description: title })
        if (res) {
            setQRData(res);
        }
    }

    useEffect(() => {
        generateQRCode();
    }, [amount])

    return (
        <div className="bg-white mx-auto rounded-xl px-6 py-2 md:w-1/2 border w-full text-center mt-4 flex lg:flex-row flex-col items-center justify-between">
          <div className="mb-4 text-left flex flex-col items-center gap-3">
            <h3 className="text-2xl font-semibold text-gray-800">Payment Details</h3>
            <p className="text-xl text-gray-600">{title}</p>
            <p className="text-xl text-gray-600">Session: <span className="font-medium">{formData.mode}</span></p>
            <p className="text-xl text-gray-700 mt-1">Amount: <span className="font-bold text-blue-600">{amount}</span></p>
          </div>
          <div className="relative flex items-center justify-center h-screen w-full lg:w-3/5">
            {!qrLoaded && (
                <div className="flex flex-col items-center gap-4 absolute p-4">
                    <Spinner />
                    Loading QR Code
                </div>
            )}
            <img src={qrData.image_url} onLoad={imageLoaded} alt="QR Code" className="object-cover w-full h-full" />
          </div>

          {/* <CountdownTimer expiryTimestamp={qrData.close_by} countCompleted={countCompleted} /> */}

          {paymentSuccess && <PaymentSuccessPopup mode={formData.mode} />}
        </div>
    )
}

export default PaymentSection;