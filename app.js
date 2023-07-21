console.log('app.js imported');

var titleglow = 0;
var grayglow = 0;

var t = document.getElementById('title')
var g = document.getElementById('graybar')

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
    if (titleglow < 20) {titleglow++;}
    t.style.boxShadow = "-20px 0 "+String(titleglow/1.5>>0)+"px "+String(titleglow/1.5>>0)+"px #48abe0";
    t.style.textShadow = "#48abe0 0 0 "+String(titleglow)+"px";
    t.style.letterSpacing = String((((6.7-((titleglow-20)**2)/70)*10)>>0)/10)+"px";
}
function titleglowdown() {
    if (titleglow > 0) {titleglow--;}
    t.style.boxShadow = "-20px 0 "+String(titleglow/1.5>>0)+"px "+String(titleglow/1.5>>0)+"px #48abe0";
    t.style.textShadow = "#48abe0 0 0 "+String(titleglow)+"px";
    t.style.letterSpacing = String(1.1**titleglow) + "px";
}

function grayglowup() {
    if (grayglow < 5) {grayglow++;}
    g.style.boxShadow = "0 0 "+String(grayglow)+"px "+String(grayglow)+"px #48abe0";
    g.style.textShadow = "#48abe0 0 0 "+String(grayglow*2)+"px";
}
function grayglowdown() {
    if (grayglow > 0) {grayglow--;}
    g.style.boxShadow = "0 0 "+String(grayglow)+"px "+String(grayglow)+"px #48abe0";
    g.style.textShadow = "#48abe0 0 0 "+String(grayglow*2)+"px";
}

repeatWhileMouseOver(t, titleglowup, titleglowdown);
repeatWhileMouseOver(g, grayglowup, grayglowdown);
