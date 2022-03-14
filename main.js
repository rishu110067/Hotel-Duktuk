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


/* ------------------ Image Slider Part ------------------ */

const img = document.getElementById("img");
const caption = document.getElementById("caption");
const thumbnail = document.querySelector(".thumbnail");

// Store the url and caption for each Image
let imgList = [
    {
        url: "url(./assets/room1.jpg)",
        cap: "Image 1"
    },
    {
        url: "url(./assets/room2.jpg)",
        cap: "Image 2"
    },
    {
        url: "url(./assets/room3.jpg)",
        cap: "Image 3"
    },
    {
        url: "url(./assets/room4.jpg)",
        cap: "Image 4"
    }
];

// Add thumbnail dot for each Image
imgList.forEach((item, i) => {
    thumbnail.innerHTML += `<span onclick="changeImg(${i})"></span>`;
});
thumbnail.querySelector("span").classList.add("active");

// Current Image's Index.
let index = 0;

// Function to change Image when thumbnail or arrow is clicked.
function changeImg(ind){
    index = ind;
    if(index >= imgList.length) index = 0;
    if(index < 0) index = imgList.length - 1;
    img.style.setProperty("background-image", imgList[index].url);
    caption.textContent = imgList[index].cap;
    thumbnail.querySelector(".active").classList.remove("active");
    thumbnail.querySelector(`span:nth-child(${index + 1})`).classList.add("active");
}

// Function to increment/decrement index when arrow is clicked
function increment(cond) {
    cond ? index++ :index--;
    changeImg(index);
}