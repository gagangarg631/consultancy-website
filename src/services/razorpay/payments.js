import axios from "axios";

export const createQRCode = async ({ amount, description }) => {
    try {
        const response = await axios.post(
            'https://createqrcode-lvlb6jctqq-uc.a.run.app',
            { 
                amount, 
                description,
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

export const checkPaymentStatus = async (qr_code_id) => {
    return new Promise((resolve, reject) => {
        const interval = setInterval(async ()  => {
            try {
                const response = await axios.post(
                    'https://checkpaymentstatus-lvlb6jctqq-uc.a.run.app', 
                    { qr_code_id }
                )
                clearInterval(interval);
                resolve(response.data);
            } catch (error) {
                reject(`Error checking payment status: ${error}`);
            }
        }, 5000);
    })
}