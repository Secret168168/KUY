function startWebsite() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';

    const audio = new Audio('background-sound.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
}
function startWebsite() {
    window.location.href = 'pages/about.html'; // เปลี่ยนเส้นทางไปที่ about.html
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("../navbar.html") // ใช้ "../" หากไฟล์อยู่ในโฟลเดอร์ย่อย เช่น pages/
        .then(response => response.text())
        .then(data => document.getElementById("navbar-container").innerHTML = data)
        .catch(error => console.error("Error loading navbar:", error));
});

