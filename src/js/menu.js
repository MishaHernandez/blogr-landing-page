import {changeMenuIcon} from './index';

const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('js-show-menu');
    changeMenuIcon();
})

menu.firstElementChild.addEventListener('click', (e)=> {
    if (e.target.className === 'navbar__menu-item') {
        e.target.firstElementChild.firstElementChild.nextElementSibling.classList.toggle('js-rotate-arrow');
        e.target.nextElementSibling.classList.toggle('js-show-submenu');
    }
})