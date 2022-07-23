// console.log("yes");
// import {navbar2} from "../components/navbar.js";
// console.log(navbar2());
// document.getElementById("navbar2").innerHTML=navbar2();

// console.log('hello')
import {navbar,footer} from "../components/navbar_footer.js";
// console.log(navbar(),footer());
document.querySelector('.navbar').innerHTML = navbar();
document.querySelector(".footer").innerHTML=footer();
