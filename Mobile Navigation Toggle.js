// Mobile Navigation Toggle
// 1. Select Elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll('.nav-link'); // Added missing definition

// 2. Mobile Navigation Toggle
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// 3. Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 4. Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ... Keep the rest of your scroll and observer code below ...


    // 2. Animate hamburger icon (Moved inside the click listener)
const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}); // This now correctly closes the entire click event





// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        // Opaque Black when scrolling
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        // Transparent Black Shade when at the top
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        navbar.style.boxShadow = 'none';
    }
});

const navbar = document.querySelector('.navbar');

navbar.addEventListener('mouseenter', () => {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
});

navbar.addEventListener('mouseleave', () => {
    if (window.scrollY <= 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
});

// CTA Button scroll to destinations
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    const destinationsSection = document.querySelector('#destinations');
    const offsetTop = destinationsSection.offsetTop - 70;
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});

// Destination cards animation on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';

            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe destination cards and blog posts
const destinationCards = document.querySelectorAll('.destination-card');
const blogPosts = document.querySelectorAll('.blog-post');

destinationCards.forEach(card => observer.observe(card));
blogPosts.forEach(post => observer.observe(post));

// Learn More buttons
const learnMoreButtons = document.querySelectorAll('.learn-more');
learnMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const destinations = ['Paris', 'Santorini', 'Bali', 'Tokyo'];
        alert(`Learn more about ${destinations[index]}! This would typically open a detailed page.`);
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formInputs = contactForm.querySelectorAll('input, textarea');
    let formData = {};

    formInputs.forEach(input => {
        if (input.type === 'text') formData.name = input.value;
        if (input.type === 'email') formData.email = input.value;
        if (input.tagName === 'TEXTAREA') formData.message = input.value;
    });

    console.log('Form submitted:', formData);

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    contactForm.reset();
});

// Read More links
const readMoreLinks = document.querySelectorAll('.read-more');
readMoreLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const titles = ['10 Hidden Gems in Europe', 'Budget Travel Tips for 2026', 'Solo Travel Guide for Beginners'];
        alert(`Reading: ${titles[index]}\n\nThis would typically open the full blog post.`);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Initialize animations
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';

    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
});
// Add this to the very end of script.js
window.addEventListener('mousemove', (e) => {
    const overlay = document.getElementById('cursor-overlay');
    if (overlay) {
        overlay.style.setProperty('--x', e.clientX + 'px');
        overlay.style.setProperty('--y', e.clientY + 'px');
    }
});

console.log('Wanderlust Travel Blog loaded successfully!');
