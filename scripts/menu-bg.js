const headerList = document.querySelector(".header__list");
const logoMenu = document.querySelector(".logo-image__menu-bg");
const menuBg = document.querySelector(".menu-bg");
const main = document.querySelector(".main");

const applyTransform = () => {
    menuBg.classList.toggle("active")
}

const showMenu = () => {
    headerList.classList.toggle("show");
}
const showLogo = () => {
    
    if(headerList.classList.contains('show')) {
        headerList.style.display = 'block';
    } 
    else {
        headerList.style.display = 'none';
    }
}   

menuBg.onclick = () => {
    showMenu()
    showLogo()
    applyTransform()
};
