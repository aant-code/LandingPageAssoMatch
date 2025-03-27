// Select the burger menu and menu items
const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelector('.menu-items');

// Add click event to toggle the menu
burgerMenu.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});