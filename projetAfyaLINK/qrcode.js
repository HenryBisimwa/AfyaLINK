import QRCode from "qrcode";

const canvas = document.getElementById("qrcode");

QRCode.toCanvas(
    canvas,
    "https://afyalink-ruby.vercel.app/",
    function (error) {
        if (error) {
            console.error(error);
        } else {
            console.log("QR Code créé avec succès !");
        }
    }
);