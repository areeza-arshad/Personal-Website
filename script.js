window.onload = function () {
    document.body.style.opacity = '1';
    typeWriter();
    animateCloud();
};
const heading = document.getElementById('heading');
const text = heading.innerHTML.trim();
heading.innerHTML = "";

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById('heading').innerText += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}
typeWriter();
function animateCloud() {
    const clouds = [
        { id: "cloud", speed: 10, top: "0" },
        { id: "cloud2", speed: 12, top: "30%" },
        { id: "cloud3", speed: 15, top: "60%" },
        { id: "cloud4", speed: 20, top: "70%" }
    ];

    clouds.forEach(cloud => {
        let cloudElement = document.getElementById(cloud.id);
        cloudElement.style.top = cloud.top;
        cloudElement.style.animation = `moveClouds ${cloud.speed}s linear infinite`;
    });
}
document.getElementById("loader").addEventListener("click", function () {
    location.reload();
});