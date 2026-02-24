import { Scanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../constants";


export default function ScannerPage() {
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const [key, setKey] = useState(Date.now());
    async function getUserType() {
        console.log('result', result)
        await axios.post(API_URL + "yuqlama/user", {
            userid: result
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => toast.success(res.data.fullname + " Xush kelibsiz"))
            .catch(err => toast.warning(err.response.data.message.split(":")[1]))
    }



    const handleError = useCallback((err) => {
        // Faqat muhim xatolarni ko'rsatish
        if (err?.name === 'NotAllowedError' || err?.name === 'NotFoundError') {
            // console.error("Kritik xato:", err.message);
            setError("Kritik xato:", err.message)
        }
    }, []);

    useEffect(() => {
        if (result !== null) {
            getUserType()
        }
        console.log(result)
        console.log(error)
    }, [result])
    return <>
        <Scanner
            key={key}
            onScan={(r) => setResult(r[0].rawValue)}
            onError={handleError}
        />
    </>
}