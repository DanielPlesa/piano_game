const whiteKeys=["z", "x", "c", "v", "b", "n","m"];
const blackKeys=["s", "d", "g", "h", "j"];


document.addEventListener("keypress", (event)=> {
    if (event.key == "z") {
        document.getElementById('C').play();
    }
})






// class Game {
//     constructor() {
//         this.sound = null;
//     };

// start() {
//     this.sound= [];
//     this.attachEventListeners();
// }    
// attachEventListeners() {
//     var audio = new Audio('key01.ogg');
//     audio.play()
//     document.addEventListener("keypress", (event) => {
//         if (event.key === "z") {
//             this.sound-C1();
//         }
//     })
// }

// }
