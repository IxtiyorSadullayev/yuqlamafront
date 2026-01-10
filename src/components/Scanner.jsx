import { Scanner } from "@yudiel/react-qr-scanner";
import { useEffect, useState } from "react";

export default function ScannerPage() {
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    useEffect(()=>{
        console.log(result)
    }, [result])
    return <>
        <Scanner
            onScan={(r) => setResult(r[0].rawValue)}
            onError={e => setError(e)}
          />
    </>
}