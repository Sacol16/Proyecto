const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const btnSea = document.querySelector('.btn_sea i');
const btnSho = document.querySelector('.btn_sho i');
const btnUse = document.querySelector('.btn_use i');

btnSea.addEventListener('mouseenter', () => {
    btnSea.className = 'ri-search-fill';
});
btnSea.addEventListener('mouseleave', () => {
    btnSea.className = 'ri-search-2-line';
});

btnSho.addEventListener('mouseenter', () => {
    btnSho.className = 'ri-shopping-bag-fill';
});
btnSho.addEventListener('mouseleave', () => {
    btnSho.className = 'ri-shopping-bag-4-line';
});

btnUse.addEventListener('mouseenter', () => {
    btnUse.className = 'ri-user-fill';
});
btnUse.addEventListener('mouseleave', () => {
    btnUse.className = 'ri-user-line';
});