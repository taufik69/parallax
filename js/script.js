
let paralax = document.querySelector('.parallax');
let paralax2 = document.querySelector('.parallax2');


window.addEventListener('scroll' , function(){
    let offset = window.pageYOffset;
    paralax.style.backgroundPositionY = offset * .7 + 'px';
});

window.addEventListener('scroll' , function(){
    let offset = window.pageYOffset;
    paralax2.style.backgroundPositionY = offset * .9 + 'px';
});