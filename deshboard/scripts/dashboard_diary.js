
import { navbar, footer } from "../components/navbar_footer.js";

document.querySelector('.navbar').innerHTML = navbar();

document.querySelector('.footer').innerHTML = footer();

function openDialogue(val) {
    let element = document.getElementById("url");
    element.value = val;
    element.innerHTML = val;
}

function showDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}


window.onclick = function (event) {
    if (!event.target.matches(".dotmenu")) {
        let dropdowns = document.querySelector(".dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

let d = new Date().toDateString()

document.querySelector('.date>div:nth-child(2)').textContent = d;
