// 1. SELECT ELEMENTS
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const overlay = document.getElementById('cursor-overlay');
const hero = document.querySelector('.hero');
const ctaButton = document.querySelector('.cta-button');

// 2. MOBILE NAVIGATION TOGGLE
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// 3. SMOOTH SCROLLING & CLOSE MENU
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Close menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');

        // Execute Smooth Scroll
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

// 4. INTERACTIVE FLASHLIGHT CURSOR
// This listens for mouse movement and updates the CSS variables
window.addEventListener('mousemove', (e) => {
    if (overlay) {
        overlay.style.setProperty('--x', e.clientX + 'px');
        overlay.style.setProperty('--y', e.clientY + 'px');
    }
});

// 5. SCROLL EFFECTS (NAVBAR & PARALLAX)
window.addEventListener('scroll', () => {
    // Navbar Background Toggle
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        navbar.style.boxShadow = 'none';
    }

    // Parallax Hero Effect
    if (hero) {
        let scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
    }
});

// 6. NAVBAR HOVER LOGIC
navbar.addEventListener('mouseenter', () => {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
});

navbar.addEventListener('mouseleave', () => {
    if (window.scrollY <= 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
});

// 7. REVEAL ANIMATIONS (INTERSECTION OBSERVER)
const revealOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, revealOptions);

// Initialize cards and posts for animation
document.querySelectorAll('.destination-card, .blog-post').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    revealObserver.observe(card);
});

// 8. CTA BUTTON SCROLL
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const destinationsSection = document.querySelector('#destinations');
        if (destinationsSection) {
            window.scrollTo({ 
                top: destinationsSection.offsetTop - 70, 
                behavior: 'smooth' 
            });
        }
    });
}

// 9. DYNAMIC ALERTS & FORM HANDLING
// Learn More buttons
document.querySelectorAll('.learn-more').forEach((button, index) => {
    button.addEventListener('click', () => {
        const destinations = ['Paris', 'Santorini', 'Bali', 'Tokyo'];
        alert(`Learn more about ${destinations[index]}! This would typically open a detailed page.`);
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Read More links
document.querySelectorAll('.read-more').forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const titles = ['10 Hidden Gems in Europe', 'Budget Travel Tips for 2026', 'Solo Travel Guide for Beginners'];
        alert(`Reading: ${titles[index]}`);
    });
});

// 10. PAGE LOAD ENTRANCE
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
    console.log('Wanderlust Travel Blog - JavaScript fully operational!');
});
