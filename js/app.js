var elRed = document.querySelector('.red');
var elYellow = document.querySelector('.yellow');
var elGreen = document.querySelector('.green');

setInterval(() =>{
    elRed.style.background = 'red';
    elYellow.style.background = 'rgb(237, 237, 223)'
    elGreen.style.background = 'rgb(237, 237, 223)'
},1000);

setInterval(() =>{
    elRed.style.background = 'rgb(237, 237, 223)'
    elYellow.style.background = 'yellow'
    elGreen.style.background = 'rgb(237, 237, 223)'
},2000);

setInterval(() =>{
    elRed.style.background = 'rgb(237, 237, 223)'
    elYellow.style.background = 'rgb(237, 237, 223)'
    elGreen.style.background = 'green'
},3000);


document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("Kod ni ko'chirish mumkinmas !!!");
});

window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.code === 'KeyI') {
        event.preventDefault(); 
        alert('ctrl + shift + i bosish mumkinmas !');
    }
});

window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.code === 'KeyU') {
        event.preventDefault();
        alert('ctrl + U bosish mumkinmas !');
    }
});


