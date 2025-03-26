// Typing Effect for Blog Title
document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to My Blog!";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.querySelector(".typing-effect").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
