/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true
});

sr.reveal('.home__header, .section__title', { delay: 400 });
sr.reveal('.home__footer', { delay: 500 });
sr.reveal('.home__img', { delay: 700, origin: 'top' });

sr.reveal('.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy', { origin: 'top', interval: 50 });
sr.reveal('.specs__data, .discount__animate', { origin: 'left', interval: 50 });
sr.reveal('.specs__img, .discount__img', { origin: 'right' });
sr.reveal('.case__img', { origin: 'top' });
sr.reveal('.case__data');

/*=============== ADDITIONAL ANIMATIONS ===============*/
// Example of additional animations
sr.reveal('.testimonial__card', { origin: 'bottom', interval: 100 });
sr.reveal('.team__member', { origin: 'left', interval: 100 });

// Example of parallax effect
const aboutImg = document.querySelector('.about__img');
if (aboutImg) {
    sr.reveal('.about__img', {
        origin: 'left',
        distance: '80px',
        duration: 1200,
        delay: 300,
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        viewFactor: 0.5
    });
}

// Example of fade-in text animation
const featuresText = document.querySelectorAll('.features__text');
featuresText.forEach(item => {
    sr.reveal(item, {
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 400,
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        viewFactor: 0.5
    });
});

// Example of scale-up animation
const serviceItems = document.querySelectorAll('.service__item');
serviceItems.forEach(item => {
    sr.reveal(item, {
        scale: 0.85,
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        viewFactor: 0.5
    });
});
