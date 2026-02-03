// Auto Escola Mineiro - Core Script
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    // --- Mobile Menu Logic ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenuOverlay = document.getElementById('mobileMenu');
    const navDesktopUl = document.querySelector('.nav-desktop ul');

    // Inject content if empty
    if (mobileMenuOverlay.innerHTML.trim() === '') {
        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = '<i class="ri-close-line"></i>';
        closeBtn.style.cssText = 'position:absolute; top:30px; right:30px; font-size:2.5rem; color:white; cursor:pointer; padding:10px;';
        closeBtn.onclick = () => mobileMenuOverlay.classList.remove('active');

        const mobileNav = document.createElement('nav');
        mobileNav.innerHTML = navDesktopUl.innerHTML;
        mobileNav.style.cssText = 'display:flex; flex-direction:column; gap:40px; text-align:center; font-size:1.8rem;';

        // Clean up inline styles for mobile consistency if needed, but keeping them might be okay for the button
        // Let's ensure links are white in mobile menu
        const links = mobileNav.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = 'white';
            link.addEventListener('click', () => mobileMenuOverlay.classList.remove('active'));
        });

        mobileMenuOverlay.appendChild(closeBtn);
        mobileMenuOverlay.appendChild(mobileNav);
    }

    mobileToggle.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('active');
    });

    // --- Hero Animation (Bureaucracy to Freedom) ---
    // Metaphor: Elements sliding in and "breaking free"

    // 1. Entrance
    gsap.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.hero-actions', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    // 2. Scroll Animation for the "Car"
    gsap.to('.hero-visual i', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        x: 200, // Move forward
        scale: 1.5, // Get closer
        opacity: 0, // "Explode/Fade" into knowledge
        rotation: 10
    });

    // --- Stats Counter Animation ---
    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.trust-stripe',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    // --- Timeline Animation ---
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 75%',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out'
    });

    // --- Services Hover Effect (Js-assisted tilt optional, sticking to CSS for performace) ---

    // --- FAQ Accordion ---
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            const parent = acc.parentElement;
            const icon = acc.querySelector('i');

            // Close others
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('active');
                    const otherIcon = item.querySelector('.accordion-header i');
                    if (otherIcon) otherIcon.classList.replace('ri-subtract-line', 'ri-add-line');
                }
            });

            // Toggle current
            parent.classList.toggle('active');

            // Icon swap
            if (parent.classList.contains('active')) {
                icon.classList.replace('ri-add-line', 'ri-subtract-line');
            } else {
                icon.classList.replace('ri-subtract-line', 'ri-add-line');
            }
        });
    });

});
