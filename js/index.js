// Your code goes here
const set = function(selector){
    return document.querySelector(selector);
}

// mouseenter & mouseout event
const header = set('.intro');
const banner = header.querySelector('img');

function highlight(event){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}
function restore(event){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.querySelector('.logo-heading').style.color = 'black';
}
banner.addEventListener('mouseenter', highlight);
banner.addEventListener('mouseout', restore);

// keypress & keyup event
const text = document.getElementsByTagName('a');
function zoom(event) {
    if(event.key === 'f'){
        for(let i = 0; i < text.length; i++){
            text[i].style.fontSize = '2.2rem';
            text[0].style.color = 'red';
            text[1].style.color = 'blue';
            text[2].style.color = 'green';
            text[3].style.color = 'orange';
        }
    }
}

function shrink(event) {
    for(let i = 0; i < text.length; i++){
        text[i].style.fontSize = '1.6rem';
        text[i].style.color = 'black';
    }
}
document.addEventListener('keypress', zoom);
document.addEventListener('keyup', shrink);

// dblclick event
const mapImg = document.getElementsByTagName('img')[1];
const boatImg = document.getElementsByTagName('img')[2];
function font(event) {
    document.body.style.fontFamily = 'Do Hyeon';
}

function defaultFont(event) {
    document.body.style.fontFamily = 'Roboto';
}
mapImg.addEventListener('dblclick', font);
boatImg.addEventListener('dblclick', defaultFont);

// click event
const button = document.querySelectorAll('.btn');
const frames = document.getElementsByTagName('img');
function border(event) {
    for(let i = 0; i < frames.length; i++){
        frames[i].style.border = '5px solid red';
    }
}
button[0].addEventListener('click', border);

// wheel event
const island = document.getElementsByTagName('img')[3];
function grow(event) {
    event.preventDefault();
    scale += event.deltaY * -.01;
    scale= Math.min(Math.max(.15, scale), 3);

    island.style.transform = `scale(${scale})`;
}
let scale = 1;
island.onwheel = grow;
island.addEventListener('wheel', grow);

// focus & blur event
const textInput = document.querySelector('.textInput');
const password = document.querySelector('.passInput');
textInput.addEventListener('focus', (event) => {event.target.style.backgroundColor = "seagreen"});
textInput.addEventListener('blur', (event) => {event.target.style.backgroundColor = ""});
password.addEventListener('focus', (event) => {event.target.style.backgroundColor = "seagreen"});
password.addEventListener('blur', (event) => {event.target.style.backgroundColor = ""});

// resize event
function change(event) {
    document.body.style.backgroundColor = "green";
}
window.addEventListener('resize', change);

//stopPropagation
const card = document.querySelectorAll('.destination');
function disappear1(event) {
    card[1].style.display = 'none';
    event.stopPropagation();
}
button[1].addEventListener('click', disappear1);

function disappear2(event) {
    card[2].style.display = 'none';
    event.stopPropagation();
}
button[2].addEventListener('click', disappear2);

// preventDefault()
function refresh(event) {
    for(let i = 0; i < text.length; i++) {
        text[i].preventDefault;
    }
}
document.addEventListener('click', refresh);
