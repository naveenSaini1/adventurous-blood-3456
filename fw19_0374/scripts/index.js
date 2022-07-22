document.getElementById('mover').addEventListener('click',function(){
    event.preventDefault()
    // let rountMenu=document.getElementById('rount-menu').style.transform='rotate(92deg)'
    let element=document.querySelector('.mover').style.display;
    if(element=='none'){
        document.querySelector('.mover').style.display='block'
        document.getElementById('arount-menu').style.transform='rotate(270deg)'
    }
    else{
        document.querySelector('.mover').style.display='none'
        document.getElementById('arount-menu').style.transform='rotate(92deg)'
        // document.getElementById('arount-menu').style.color='red'

    }
    console.log('hello')
})

document.getElementById('index').addEventListener('click',function(){
    window.location.href='index.html'
})
// transform: rotate(267deg);
document.getElementById('pro').addEventListener('click',function(){
    window.location.href='cronometerPro.html'
})
// logo
document.querySelector('.logo').addEventListener('click',function(){
    window.location.href='index.html'
})