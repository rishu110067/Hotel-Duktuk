// Opening menu when hamburger is clicked
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function() {
    header.classList.toggle('menu-open');
})

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition);
})


// Closing menu when any list item is clicked
let hom = document.querySelector('#hom');
hom.addEventListener('click', function() {
    document.getElementById('hamburger').click();
})

let abt = document.querySelector('#abt');
abt.addEventListener('click', function() {
    document.getElementById('hamburger').click();
})

let fac = document.querySelector('#fac');
fac.addEventListener('click', function() {
    document.getElementById('hamburger').click();
})

let gal = document.querySelector('#gal');
gal.addEventListener('click', function() {
    document.getElementById('hamburger').click();
})

let tar = document.querySelector('#tar');
tar.addEventListener('click', function() {
    document.getElementById('hamburger').click();
})

let con = document.querySelector('#con');
con.addEventListener('click', function() {
    document.getElementById('hamburger').click();
})
