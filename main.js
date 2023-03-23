const menuEmail     =   document.querySelector('.navbar-email');
const desktopMenu   =   document.querySelector('.desktop-menu');
const menuHamIcon   =   document.querySelector('.menu');
const mobileMenu    =   document.querySelector('.mobile-menu');
const menuCarrito   =   document.querySelector('.navbar-shopping-cart')
const cardsContainer=   document.querySelector('.cards-container')
const prodDetClose  =   document.querySelector('.product-detail-close')
const allCarrito    =   document.querySelector('#shoppingCartContainer')
const prodDetCont   =   document.querySelector('#productDetail')

const productList = []; 




/* Construyendo la lista de productos*/
productList.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push ({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push ({
    name: 'Computador',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click',toggleCarrito);
prodDetClose.addEventListener('click',cerrarProdDetCont)





function toggleDesktopMenu () {
    desktopMenu.classList.toggle ('inactive')
    allCarrito.classList.add ('inactive')
    prodDetCont.classList.add ('inactive')
    
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive')
    allCarrito.classList.add ('inactive')
    prodDetCont.classList.add ('inactive')
}

function toggleCarrito () {
    allCarrito.classList.toggle ('inactive')
    desktopMenu.classList.add ('inactive')
    mobileMenu.classList.add ('inactive')
    prodDetCont.classList.add ('inactive')
}

function openProductDetailAside() {
    prodDetCont.classList.remove ('inactive')
    allCarrito.classList.add ('inactive')
    desktopMenu.classList.add ('inactive')
    mobileMenu.classList.add ('inactive')

}

function cerrarProdDetCont (){
    prodDetCont.classList.add ('inactive')
}

function renderProducts (arr) {
    for (product of productList) {
        const productCard = document.createElement ('div')
        productCard.classList.add('product-card')

        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        img.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement ('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement ('div')

        const productPrice = document.createElement ('p')
        productPrice.innerText = '$'+product.price
        productPrice.classList.add('product-price')

        const productName = document.createElement ('p')
        productName.innerText = product.name
        productName.classList.add('product-name')

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)


        const productInfoFigure = document.createElement ('figure')
        const productImgCart = document.createElement ('img')
        productImgCart.setAttribute('src', '/icons/bt_add_to_cart.svg')
        productInfoFigure.appendChild(productImgCart)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(img)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)