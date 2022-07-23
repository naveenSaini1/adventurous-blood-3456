import {navbar,footer} from "../components/navbar_footer.js";
// console.log(navbar(),footer());
document.querySelector('.navbar').innerHTML = navbar();
document.querySelector(".footer").innerHTML=footer();