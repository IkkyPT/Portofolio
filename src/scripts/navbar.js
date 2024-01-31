document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarItems = document.querySelector('.navbarItems');

    navbarToggle.addEventListener('click', () => {
        navbarItems.classList.toggle('show');
    });
});