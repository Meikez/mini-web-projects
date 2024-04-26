const toggleMenu = document.getElementById('toggle-menu');
const menuList = document.getElementById('menu-list');

toggleMenu.addEventListener('click', () => {
    menuList.classList.toggle('show-menu');
    toggleMenu.classList.toggle('show-menu-icon')
});

