

// Typing Animation
const typed = new Typed('.typed-text', {
    strings: ['a Computer Science Student', 'at IPB University'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const id = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-links li a[href="#${id}"]`).classList.add('active');
        } else {
            document.querySelector(`.nav-links li a[href="#${id}"]`).classList.remove('active');
        }
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true
});

sr.reveal('.hero-text, .section-title, .about-text, .contact-info', { origin: 'left' });
sr.reveal('.hero-image, .about-image, .contact-form', { origin: 'right' });
sr.reveal('.services-grid, .portfolio-grid', { interval: 200 });

// Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelector('input[type="text"]:nth-of-type(2)').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Here you would typically send the form data to a server
    console.log({ name, email, subject, message });
    
    // Show success message
    alert('Message sent successfully!');
    
    // Reset form
    contactForm.reset();
});

// Add this to your existing JavaScript file to handle the new sections

// Update the scroll reveal for new sections
sr.reveal('.skill-category, .award-card', { 
    interval: 200,
    origin: 'bottom',
    distance: '50px'
});

// Update navigation to include new sections
// Add these to your nav-links in HTML:
// <li><a href="#skills">Skills</a></li>
// <li><a href="#awards">Awards</a></li>