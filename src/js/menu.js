import {changeMenuIcon} from './index';

const menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('js-show-menu');
    changeMenuIcon();
    // if (menu.classList.contains('js-show-menu')) {
    //     menuIcon.setAttribute('src', './images/icon-close.svg');
    // } else {
    //     menuIcon.setAttribute('src', './images/icon-hamburger.svg');
    // }
    
})