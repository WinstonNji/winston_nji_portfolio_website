/* ============================================
   Winston Nji Portfolio — app.js
   ============================================ */

// ---- Navbar scroll state ----
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 24) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// ---- Hamburger menu ----
const navToggle  = document.getElementById('nav-toggle');
const navMobile  = document.getElementById('nav-mobile');

navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a link is clicked
navMobile.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');

const updateActiveLink = () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
};

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

// ---- Scroll reveal ----
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el, i) => {
    // Stagger cards within the same parent
    const siblings = el.parentElement.querySelectorAll('.reveal');
    if (siblings.length > 1) {
        const idx = Array.from(siblings).indexOf(el);
        el.style.transitionDelay = `${idx * 60}ms`;
    }
    revealObserver.observe(el);
});

// ---- Contact form ----
function sendEmail(e) {
    if (e) e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields before sending.');
        return;
    }

    const subject = encodeURIComponent(`Message from ${name}`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:winston00russel@gmail.com?subject=${subject}&body=${body}`;
}
