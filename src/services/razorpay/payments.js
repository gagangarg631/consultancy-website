import axios from "axios";

export const createQRCode = async ({ amount, description, confirmed = false, bookingData = {} }) => {
    try {
        const response = await axios.post(
            'https://createqrcode-fdnvglwxvq-uc.a.run.app',
            { 
                amount, 
                description,
                confirmed,
                bookingData
            },
            { 
                headers: { 
                    'Content-Type': 'application/json' 
                } 
            }
        )
    
        return response.data;
    } catch (error) {
        console.error("Error creating QR Code: ", error);
    }
}

export const checkPaymentStatus = async (qr_code_id, bookingData) => {
    return new Promise((resolve, reject) => {
        const interval = setInterval(async ()  => {
            try {
                const response = await axios.post(
                    'https://checkpaymentstatus-fdnvglwxvq-uc.a.run.app', 
                    { 
                        qr_code_id,
                        bookingData
                    }
                )
                if (response.data.paid) {
                    clearInterval(interval);
                    resolve(response.data);
                }
            } catch (error) {
                reject(`Error checking payment status: ${error}`);
            }
        }, 5000);
    })
}