let navbar=()=>{
    return `<div id="crono">
    <a href="../../index.html">
    <img src="https://us.v-cdn.net/6030245/uploads/666babe018022fdd94bf429140228002.png" alt="">
    </a>
    </div>
    <div>
        <a href="../subpage/login.html"><button class="button1">SIGN IN</button></a>
        <a href="../subpage/signup.html"><button class="button1">REGISTER </button></a>
    </div>`;
}

let mid=()=>{
    return `<div id="mid">
                <h1 id="heading">How can we help you?</h1>
                <input id="input" type="text" placeholder="Search">
                <button class="button1">🔍</button>
            </div>`;
}

export {navbar, mid};