/* Project: Shuttle Image Gallery                          *
 * Developer: Ryan Clark                                   *
 * Last Modified: September 12, 2012                       *
 * File Name: script.js                                    *
 * File Type: text / js                                    *
 *                                                         */

window.onload = (function() {
    
    // ***** Initialization of Application ***** //
    shutter = function() {
        // ***** Initialization of Private Variables used by Shutter Application ***** //
        var i = 0,
        caption = document.getElementById("caption"),
        next = document.getElementById("next"),
        prev = document.getElementById("prev"),
        renderer = document.getElementById("render");
        
        return {
            app: "Shutter Image Gallery",
            author: "Ryan Clark",
            
            // ***** Insert Image Captions. Caption will display to corresponding image. ***** //
            captions: [
                       "It looks as if Mario and Yoshi are having some fun!",
                        "A powerful Jedi from Star Wars - Knights of the Old Republic MMO.",
                        "Battlefield or Call of Duty Modern Warfare?... The world may never know.",
                        "Nathan Drake from Uncharted 3.",
                        "MasterChief, Spartan John-117 reporting for duty!",
                        "MineCraft, nuff' said!",
                        "You better watch out, Kratos is coming to town.",
                        "Max Payne 3 by Rockstar Games"
            ],
            
            // ***** Insert Relative Paths to Images. Image will display corresponding caption. Future support for Absolute Paths. ***** //
            images: [
                     "screen01.jpeg",
                     "screen02.jpeg",
                     "screen03.jpeg",
                     "screen04.jpeg",
                     "screen05.jpeg",
                     "screen06.jpeg",
                     "screen07.jpeg",
                     "screen08.jpeg"
            ],
            
            path: "images/",
            version: "0.3",
            
            // ***** Declaration of Public Methods - Do not change alter data past this point if your not a programmer. ***** //
            checkScreen: function(real) {
                var imgs = this.images;
        
                if (real === 0) {
                    prev.style.visibility = "hidden";
                } else if (real === imgs.length - 1) {
                    next.style.visibility = "hidden";
                } else {
                    next.style.visibility = "visible";
                    prev.style.visibility = "visible";
                }
            },
            
            getVersion: function() {
                if(this.version) {
                    return "Version: " + this.version;
                } else {
                    return "Warning: Cannot read version of application!";
                }
            },
            
            init: function() {
                this.checkScreen(i);
                
                var self = this,
                screen = this.path + this.images[i],
                text = document.createTextNode(this.captions[i]);
                
                caption.appendChild(text);
                renderer.alt = this.captions[i];
                renderer.src = screen;
                
                next.onclick = (function () { self.update(true); return false; });
                prev.onclick = (function () { self.update(false); return false; });
            },
            
            update: function(way) {
                if (way === true) {
                    i = i + 1;
                } else if (way === false) {
                    i = i - 1;
                } else {
                    return;
                }
                
                this.checkScreen(i);
                
                var caps = this.captions[i],
                imgs = this.images[i],
                screen = this.path + imgs;
                
                caption.childNodes[0].nodeValue = caps;
                renderer.alt = caps;
                renderer.src = screen;
            }
        };
    }();
    
    // ***** Call the init method on shutter object. ***** //
    shutter.init();
});