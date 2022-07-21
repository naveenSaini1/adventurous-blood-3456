
import { footer, navbar, sub_nav } from '../../components/navbar.js';

document.querySelector('.navbar').innerHTML = navbar();

document.querySelector('.footer').innerHTML = footer();

document.querySelector('.sub_navbar').innerHTML = sub_nav();

let toHomePage = () => {
    window.location.href ="../../main page/support_mainpage.html";
}

document.querySelector('.manual_logo').addEventListener('click',toHomePage);

let path = document.querySelector('.path>div:nth-child(3)>p')

path.textContent = 'Mobile App';

let toreqPage = () => {
    window.location.href = "../../submit_request/sub_req.html"
}

document.querySelector('.request>div>a').addEventListener('click',toreqPage)