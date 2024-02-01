document.addEventListener("DOMContentLoaded", () => {
    const cicle = document.querySelector('.themeToggle');

    cicle.addEventListener('click', () => {
        const moon = document.getElementById("moon");
        if (moon.className === "moon") {
            moon.className = "sun";
            document.body.classList.remove("nightMode");
            document.body.classList.add("dayMode");
            document.body.style.transition = '1.2s';
        } else {
            moon.className = "moon";
            document.body.classList.remove("dayMode");
            document.body.classList.add("nightMode");
            document.body.style.transition = '1.2s';
        }
    });
});