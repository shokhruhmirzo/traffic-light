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

var isCtrlPressed = false; // Ctrl tugmasi bosilgani aniqlansin

// Ctrl tugmasi bosilganda
window.addEventListener('keydown', function(event) {
    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        isCtrlPressed = true;
    }
});

// Ctrl tugmasi bosilmaganida
window.addEventListener('keyup', function(event) {
    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        isCtrlPressed = false;
    }
});

// U tugmasi bosilganda
window.addEventListener('keydown', function(event) {
    // Agar Ctrl tugmasi bosilgan bo'lsa va U tugmasi bosilgan bo'lsa
    if (isCtrlPressed && event.code === 'KeyU') {
        // Brauzerda kodni ko'rishni to'xtatamiz
        event.preventDefault();
        // Foydalanuvchiga xabar chiqaramiz
        alert('Kodni ko\'chirish mumkin emas!');
    }
});


