const menuButton = document.getElementById('menu-button');
const mainNav = document.getElementById('main-nav');

menuButton.addEventListener('click', function() {
    mainNav.classList.toggle('show');
    
    if (mainNav.classList.contains('show')) {
        menuButton.textContent = '✕';
    } else {
        menuButton.textContent = '☰';
    }
});

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastmodified-date').textContent = document.lastModified;