// Mobile menu toggle with improved functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    // Toggle active classes
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Toggle between hamburger and X icon
    if (nav.classList.contains('active')) {
        hamburger.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E";
    } else {
        hamburger.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAVElEQVRoge3WwQ2AUAhEQb5xcK0ci5AEQmYq2L29CAAanMx8ukdUOJmZ3SMqXN0DqjgyzR0Rb/cIAKCIjJ9mTTQ6Mo2MB4BNZPw0a6LRkWlkPAB/fId1GBOc3m2dAAAAAElFTkSuQmCC";
    }
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when clicking on links
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAVElEQVRoge3WwQ2AUAhEQb5xcK0ci5AEQmYq2L29CAAanMx8ukdUOJmZ3SMqXN0DqjgyzR0Rb/cIAKCIjJ9mTTQ6Mo2MB4BNZPw0a6LRkWlkPAB/fId1GBOc3m2dAAAAAElFTkSuQmCC";
        document.body.style.overflow = 'auto';
    });
});