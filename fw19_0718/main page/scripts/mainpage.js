
// import navbar from "../components/navbar.js";

import { footer, navbar } from "../components/navbar.js";

document.querySelector('.navbar').innerHTML = navbar();

document.querySelector('.footer').innerHTML = footer();

let toWebSupportPage = () => {

    window.location.href = "../sub-pages/web_version/web_version.html";

}

let toMobSuppPage = () => {
    window.location.href = "../sub-pages/mobile_version/mob_ver.html";
}

let toProPage = () => {
    window.location.href = "../sub-pages/pro_version/pro_ver.html";
}

let toFAQpage = () => {
    window.location.href = "../sub-pages/faq/faq.html";
}

let toreqPage = () => {
    window.location.href = "../submit_request/sub_req.html"
}


document.querySelector('.first_box>div:nth-child(1)').addEventListener('click', toWebSupportPage);

document.querySelector('.first_box>div:nth-child(2)').addEventListener('click', toMobSuppPage);

document.querySelector('.first_box>div:nth-child(3)').addEventListener('click', toProPage);

document.querySelector('.second_box').addEventListener('click', toFAQpage);

document.querySelector('.request>div>a').addEventListener('click',toreqPage)