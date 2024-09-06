// Select the menu button and navigation links
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the menu button
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});