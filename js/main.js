// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 14, 23, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.boxShadow = 'none';
    }
});

// Hero Animation (Entrance)
const heroTimeline = gsap.timeline();

heroTimeline.from('#hero h1', {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
    delay: 0.2
})
    .from('#hero p:not(.text-accent)', { // Select main p
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.cta-group a', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    }, '-=0.8')
    .from('#hero img', {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out'
    }, '-=1.0');

// General Section Title Fade-In
gsap.utils.toArray('section h2').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
});

// Stagger Animations for Lists/Grids
// Purpose List
gsap.from('#proposito ul li', {
    scrollTrigger: {
        trigger: '#proposito ul',
        start: 'top 80%'
    },
    x: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out'
});

// Guide Steps
gsap.from('#guia .page-container > div:last-child > div', {
    scrollTrigger: {
        trigger: '#guia',
        start: 'top 70%'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
});

// Testimonials
gsap.from('#depoimentos .page-container > div:last-child > div', {
    scrollTrigger: {
        trigger: '#depoimentos',
        start: 'top 75%'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out'
});

// Service Cards
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '#servicos',
        start: 'top 75%'
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Hover Effects
const cards = document.querySelectorAll('.service-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
            duration: 0.3
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: 'none',
            duration: 0.3
        });
    });
});
