import QRCode from "qrcode";

const canvas = document.getElementById("qrcode");

QRCode.toCanvas(
    canvas,
    "https://sprightly-sunshine-700a62.netlify.app/",
    function (error) {
        if (error) {
            console.error(error);
        } else {
            console.log("QR Code créé avec succès !");
        }
    }
);