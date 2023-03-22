const menuEmail     =   document.querySelector('.navbar-email');
const desktopMenu   =   document.querySelector('.desktop-menu');
const menuHamIcon   =   document.querySelector('.menu');
const mobileMenu    =   document.querySelector('.mobile-menu');
const menuCarrito   =   document.querySelector('.navbar-shopping-cart')
const allCarrito    =   document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click',toggleCarrito);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle ('inactive')
    allCarrito.classList.add ('inactive')
    
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive')
    allCarrito.classList.add ('inactive')
}

function toggleCarrito () {
    allCarrito.classList.toggle ('inactive')
    desktopMenu.classList.add ('inactive')
    mobileMenu.classList.add ('inactive')
}
