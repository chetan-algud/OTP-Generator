let generateOTP = () => {
    const otpLength = 6;
    const otp = Math.floor(Math.random() * Math.pow(10, otpLength)).toString().padStart(otpLength, '0');
    document.getElementById("otpDisplay").innerHTML = otp;
};

document.getElementById("generateBtn").addEventListener("click", generateOTP);
window.addEventListener("load", generateOTP);
