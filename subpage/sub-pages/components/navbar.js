
let navbar = () => {
    return `<div class="manual_logo">
    <img src="https://theme.zdassets.com/theme_assets/197219/111fe6921e8b22116b39eaa745ea08e38a718e0d.png"
        alt="User-Manual logo">
</div>
<div class="request">
    <div>
        <a href="#">Submit a request</a>
    </div>

</div>`
}

let footer = () => {
    return `<div><a href="">Cronometer</a></div>
    <div><button class="support">Support</button></div>`
}

let sub_nav = () => {
    return `<div class="path">
    <div><a href="">Cronometer </a></div>
    <div> > </div>
    <div>
        <p>Web Version</p>
    </div>

</div>
<div><input type="text" placeholder="Search" id="input_sub_search">

</div>`
}

export { navbar, footer, sub_nav };