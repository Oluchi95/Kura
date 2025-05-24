// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
    
    // Toggle hamburger icon between menu and close
    if (nav.classList.contains('active')) {
        hamburger.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48cGF0aCBkPSJNMzQyLjYgMTUwLjZjMTIuNSAxMi41IDEyLjUgMzIuOCAwIDQ1LjNsLTE5MiAxOTJjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwcy0xMi41LTMyLjggMC00NS4zTDI3NC43IDI1NiAxMDUuNCA4Ni42Yy0xMi41LTEyLjUtMTIuNS0zMi44IDAtNDUuM3MzMi44LTEyLjUgNDUuMyAwbDE5MiAxOTJ6Ii8+PC9zdmc+";
    } else {
        hamburger.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAVElEQVRoge3WwQ2AUAhEQb5xcK0ci5AEQmYq2L29CAAanMx8ukdUOJmZ3SMqXN0DqjgyzR0Rb/cIAKCIjJ9mTTQ6Mo2MB4BNZPw0a6LRkWlkPAB/fId1GBOc3m2dAAAAAElFTkSuQmCC";
    }
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
        hamburger.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAVElEQVRoge3WwQ2AUAhEQb5xcK0ci5AEQmYq2L29CAAanMx8ukdUOJmZ3SMqXN0DqjgyzR0Rb/cIAKCIjJ9mTTQ6Mo2MB4BNZPw0a6LRkWlkPAB/fId1GBOc3m2dAAAAAElFTkSuQmCC";
    });
});