console.log("yes");
import {navbar2} from "../components/navbar.js";
console.log(navbar2());
document.getElementById("navbar2").innerHTML=navbar2();

import {navbar,footer} from "../../components/navbar.js";
console.log(navbar(),footer());
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();
