import React from "react";

const QRScannerCard = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">QR orqali yo‘qlama</h5>

        <div
          className="border rounded d-flex justify-content-center align-items-center mb-3"
          style={{ height: "220px", background: "#f8f9fa" }}
        >
          <span className="text-muted">📷 Kamera joyi</span>
        </div>

        <p className="text-success text-center">Scan qilishga tayyor</p>
        <button className="btn btn-primary w-100">Scan boshlash</button>
      </div>
    </div>
  );
};

export default QRScannerCard;
