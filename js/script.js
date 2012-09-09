window.onload = (function () {
    var app = "Shuttle Image Gallery",
    caption = document.getElementById("caption"),
    i = 0,
    next = document.getElementById("next"),
    path = "images/",
    prev = document.getElementById("prev"),
    renderer = document.getElementById("render"),
    version = "0.1",
    
    captions = [
        "It looks as if Mario and Yoshi are having some fun!",
        "A powerful Jedi from Star Wars - Knights of the Old Republic MMO.",
        "Battlefield or Call of Duty Modern Warfare?... The world may never know.",
        "Nathan Drake from Uncharted 3.",
        "MasterChief, Spartan John-117 reporting for duty!",
        "MineCraft, nuff' said!",
        "You better watch out, Kratos is coming to town.",
        "Max Payne 3 by Rockstar Games"
    ],
    
    images = [
        "screen01.jpeg",
        "screen02.jpeg",
        "screen03.jpeg",
        "screen04.jpeg",
        "screen05.jpeg",
        "screen06.jpeg",
        "screen07.jpeg",
        "screen08.jpeg"
    ];
    
    function checkScreen() {
        if (i === 0) {
            prev.style.visibility = "hidden";
        } else if (i === images.length - 1) {
            next.style.visibility = "hidden";
        } else {
            next.style.visibility = "visible";
            prev.style.visibility = "visible";
        }
    }
    
    function init() {
        checkScreen();
        
        var screen = path + images[i],
        text = document.createTextNode(captions[i]);
        
        caption.appendChild(text);
        renderer.alt = captions[i];
        renderer.src = screen;
        
        next.onclick = (function () { nextScreen(); return false; });
        prev.onclick = (function () { prevScreen(); return false; });
    }
    
    function nextScreen() {
        i = i + 1;
        checkScreen();
        
        var screen = path + images[i];
        caption.childNodes[0].nodeValue = captions[i];
        renderer.alt = captions[i];
        renderer.src = screen;
    }
    
    function prevScreen() {
        i = i - 1;
        checkScreen();
        
        var screen = path + images[i];
        caption.childNodes[0].nodeValue = captions[i];
        renderer.alt = captions[i];
        renderer.src = screen;
    }
    
    init();
});