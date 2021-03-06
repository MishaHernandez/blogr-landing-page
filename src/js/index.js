// IMAGES
// import "../images/logo.svg";
// import bgPatternCircles from "../images/bg-pattern-circles.svg";
// import bgPatternIntro from "../images/bg-pattern-intro.svg";
// import "../images/favicon-32x32.png";
// import iconArrowDark from "../images/icon-arrow-dark.svg";
// import iconArrowLight from "../images/icon-arrow-light.svg";
// import "../images/illustration-editor-desktop.svg";
// import "../images/illustration-editor-mobile.svg";
// import "../images/illustration-laptop-desktop.svg";
// import "../images/illustration-laptop-mobile.svg";
// import "../images/illustration-phones.svg";
import iconClose from "../images/icon-close.svg";
import iconHamburger from "../images/icon-hamburger.svg";

// SASS
import "../scss/main.scss";

// SCRIPTS
import "./menu";

export function changeMenuIcon() {
    if (menu.classList.contains('js-show-menu')) {
        menuIcon.setAttribute('src', iconClose);
    } else {
        menuIcon.setAttribute('src', iconHamburger);
    }
}