// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

// When mobile menu is open
document.body.style.overflow = 'hidden';

// When mobile menu is closed
document.body.style.overflow = '';