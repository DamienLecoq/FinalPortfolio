const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon1 = document.getElementById('burger-icon-1');
const burgerIcon2 = document.getElementById('burger-icon-2');
const burgerIcon3 = document.getElementById('burger-icon-3');

menuToggle.addEventListener('click', () => {
    burgerIcon1.classList.toggle('rotate-45');
    burgerIcon1.classList.toggle('translate-y-2');
    burgerIcon3.classList.toggle('rotate-[-45deg]');
    burgerIcon3.classList.toggle('translate-y-[-4px]');
    burgerIcon2.classList.toggle('opacity-0');
    
    mobileMenu.classList.toggle('hidden');
});

let lastTopScroll = 0;
const navbar = document.getElementById("NavBar");
window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastTopScroll){
    navbar.style.top="-60px";
    mobileMenu.classList.add('hidden');
    } else {
    navbar.style.top="0";
    }
    lastTopScroll = scrollTop;
})

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 4500);
});