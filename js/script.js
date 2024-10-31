// Script to fade in elements on scroll
const scrollElements = document.querySelectorAll('.scroll-fade');

const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const hideScrollElement = (element) => {
    element.classList.remove('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 150)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});
// Apply ripple effect to all buttons with the 'button' class
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', createRipple);
});

function createRipple(e) {
    const button = e.currentTarget;
    const boundingBox = button.getBoundingClientRect();
    const x = e.clientX - boundingBox.left;
    const y = e.clientY - boundingBox.top;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove());
}
