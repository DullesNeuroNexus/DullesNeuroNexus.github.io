alert('app.js imported');
var titleglow = 0;

var t = document.getElementById('title')

function repeatWhileMouseOver(element, action, deaction) {
    var interval = null;
    element.addEventListener('mouseover', function() {
        clearInterval(interval);
        interval = setInterval(action, 30);
    });

    element.addEventListener('mouseout', function() {
        clearInterval(interval);
        interval = setInterval(deaction, 30);
    });
}

function titleglowup() {
    if (titleglow < 10) {titleglow++;}
    t.style.boxShadow = "0 0 "+String(titleglow)+"px "+String(titleglow>>0)+"px #48abe0";
    t.style.textShadow = "#48abe0 0 0 "+String(titleglow/5>>0);
}
function titleglowdown() {
    if (titleglow > 0) {titleglow--;}
    t.style.boxShadow = "0 0 "+String(titleglow)+"px "+String(titleglow>>0)+"px #48abe0";
    t.style.textShadow = "#48abe0 0 0 "+String(titleglow/5>>0);
}

repeatWhileMouseOver(t, titleglowup, titleglowdown);