// src/components/QrCode.js

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = ({ number }) => {
  const [ticket, setTicket] = useState("");

  const downloadQRCode = (e) => {
    e.preventDefault();
    setTicket(number);
  };

  const qrCodeEncoder = (e) => {
    setTicket(e.target.value);
  };

  const urlValue = ['https://tickets.new-futures.co/enter/' + number.toString()].join();


  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={urlValue}
      size={300}
      bgColor={"#00ff00"}
      level={"H"}
    />
  );
  return (
    <div className="qrcode__container ">
      <div>{qrcode}</div>
      <div className="input__group">
        <form onSubmit={downloadQRCode}>
          {/* <label>Enter URL</label> */}
          
          <input
           type="hidden"
            value={urlValue}
            
          />
         
          {/* <button className="btn btn-secondary" type="submit" >
            Download QR code
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default QrCode;