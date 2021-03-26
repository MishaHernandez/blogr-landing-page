// sass
import "../scss/main.scss";
// images
import "../images/logo.svg";
// import bgPatternCircles from "../images/bg-pattern-circles.svg";
// import bgPatternIntro from "../images/bg-pattern-intro.svg";
import "../images/favicon-32x32.png";
// import iconArrowDark from "../images/icon-arrow-dark.svg";
// import iconArrowLight from "../images/icon-arrow-light.svg";
import iconClose from "../images/icon-close.svg";
import iconHamburger from "../images/icon-hamburger.svg";
// import illustrationEditorDesktop from "../images/illustration-editor-desktop.svg";
import "../images/illustration-editor-mobile.svg";
// import illustrationLaptopDesktop from "../images/illustration-laptop-desktop.svg";
import "../images/illustration-laptop-mobile.svg";
import "../images/illustration-phones.svg";

import "./menu";

export function changeMenuIcon() {
    if (menu.classList.contains('js-show-menu')) {
        menuIcon.setAttribute('src', iconClose);
    } else {
        menuIcon.setAttribute('src', iconHamburger);
    }
}

// console.log(logo);

// document.querySelector(".navbar").firstElementChild.setAttribute("src", logo);