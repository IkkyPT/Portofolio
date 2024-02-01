document.addEventListener("DOMContentLoaded", () => {
    const cicle = document.querySelector('.themeToggle');

    cicle.addEventListener('click', () => {
        const moon = document.getElementById("sun");
        if (moon.className === "sun") {
            moon.className = "moon";
            document.body.classList.remove("dayMode");
            document.body.classList.add("nightMode");
            document.body.style.transition = '0.2s';
        } else {
            moon.className = "sun";
            document.body.classList.remove("nightMode");
            document.body.classList.add("dayMode");
            document.body.style.transition = '0.2s';
        }
    });
});