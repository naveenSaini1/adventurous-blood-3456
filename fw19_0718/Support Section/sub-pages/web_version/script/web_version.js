
import { footer, navbar, sub_nav } from '../../components/navbar.js';

document.querySelector('.navbar').innerHTML = navbar();

document.querySelector('.footer').innerHTML = footer();

document.querySelector('.sub_navbar').innerHTML = sub_nav();

let toHomePage = () => {
    window.location.href ="../../main page/support_mainpage.html";
}

document.querySelector('.manual_logo').addEventListener('click',toHomePage);