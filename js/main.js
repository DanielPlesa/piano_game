const positionX=[37,39,41,43,46,49,51,53,55,57,59,61];
const orderOfTutorials =[0,0,7,7,9,9,7,5,5,4,4,2,2,0]

class Game {
    constructor() {
        this.tutorial = [];
        this.tutorials = [];
    }
    start() {

       let i = 0; 

       let id = setInterval(() => {
            const newNote = (new Tutorial(positionX[orderOfTutorials[i]])) 
            this.tutorials.push(newNote)
           
            if (i< orderOfTutorials.length-1){
                i++;
            } else {
                clearInterval(id)
            }
        }, 900);



        setInterval(() => {
            this.tutorials.forEach((tutorialInstance) => {
                tutorialInstance.moveDown();

                this.removeTutorials(tutorialInstance);
            }); 
            

        }, 100);
    }
    
    removeTutorials(tutorialInstance) {
        if (tutorialInstance.positionY < 40) {
            tutorialInstance.domElement.remove(); 
            this.tutorials.shift(); 

        }
    }

    

}


class Tutorial {
    constructor(positionX) {
        
        this.width = 2;
        this.height = 5;
        this.positionX = positionX;
       
        this.positionY = 100;

        this.domElement = null;
        this.createDomElement();
       
    }
    createDomElement() {
        this.domElement = document.createElement("div");

        this.domElement.className = "tutorial";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        const boardElm = document.getElementById("background");
        boardElm.appendChild(this.domElement)
    }
    moveDown() {
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh"   
    }
}

const game = new Game();
game.start()


const keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener("keypress", () => playNote(key))
})


document.addEventListener("keydown", (event) => {


    switch (event.key) {

        case "z":
            document.getElementById('C').play();
            document.getElementById('c note').style.background = "#aaaaa2";
            break;

        case "s":
            document.getElementById('Cb').play();
            document.getElementById('cb note').style.background = "#5e5e5e";
            break;
        case "x":
            document.getElementById('D').play();
            document.getElementById('d note').style.background = "#aaaaa2";
            break;
        case "d":
            document.getElementById('Db').play();
            document.getElementById('db note').style.background = "#5e5e5e";
            break;
        case "c":
            document.getElementById('E').play();
            document.getElementById('e note').style.background = "#aaaaa2";
            break;
        case "v":
            document.getElementById('F').play();
            document.getElementById('f note').style.background = "#aaaaa2";
            break;
        case "g":
            document.getElementById('Fb').play();
            document.getElementById('fb note').style.background = "#5e5e5e";
            break;
        case "b":
            document.getElementById('G').play();
            document.getElementById('g note').style.background = "#aaaaa2";
            break;
        case "h":
            document.getElementById('Gb').play();
            document.getElementById('gb note').style.background = "#5e5e5e";
            break;
        case "n":
            document.getElementById('A').play();
            document.getElementById('a note').style.background = "#aaaaa2";
            break;
        case "j":
            document.getElementById('Ab').play();
            document.getElementById('ab note').style.background = "#5e5e5e";
            break;
        case "m":
            document.getElementById('B').play();
            document.getElementById('b note').style.background = "#aaaaa2";
            break;
    }


})


document.addEventListener("keyup", (event) => {


    switch (event.key) {
        case "z":
            document.getElementById('C').pause();
            document.getElementById("C").currentTime = 0
            document.getElementById('c note').style.background = "#fffff0";
            break;

        case "s":
            document.getElementById('Cb').pause();
            document.getElementById("Cb").currentTime = 0
            document.getElementById('cb note').style.background = "#000";
            break;
        case "x":
            document.getElementById('D').pause();
            document.getElementById("D").currentTime = 0
            document.getElementById('d note').style.background = "#fffff0";
            break;
        case "d":
            document.getElementById('Db').pause();
            document.getElementById("Db").currentTime = 0
            document.getElementById('db note').style.background = "#000";
            break;
        case "c":
            document.getElementById('E').pause();
            document.getElementById("E").currentTime = 0
            document.getElementById('e note').style.background = "#fffff0";
            break;
        case "v":
            document.getElementById('F').pause();
            document.getElementById("F").currentTime = 0
            document.getElementById('f note').style.background = "#fffff0";
            break;
        case "g":
            document.getElementById('Fb').pause();
            document.getElementById("Fb").currentTime = 0
            document.getElementById('fb note').style.background = "#000";
            break;
        case "b":
            document.getElementById('G').pause();
            document.getElementById("G").currentTime = 0
            document.getElementById('g note').style.background = "#fffff0";
            break;
        case "h":
            document.getElementById('Gb').pause();
            document.getElementById("Gb").currentTime = 0
            document.getElementById('gb note').style.background = "#000";
            break;
        case "n":
            document.getElementById('A').pause();
            document.getElementById("A").currentTime = 0
            document.getElementById('a note').style.background = "#fffff0";
            break;
        case "j":
            document.getElementById('Ab').pause();
            document.getElementById("Ab").currentTime = 0
            document.getElementById('ab note').style.background = "#000";
            break;
        case "m":
            document.getElementById('B').pause();
            document.getElementById("B").currentTime = 0
            document.getElementById('b note').style.background = "#fffff0";
            break;
    }


})


function RestartGame() {
    window.location.reload();
}

hints = document.querySelectorAll(".hints");
function hintsOn(e, i) {
    e.setAttribute("style", "transition-delay:" + i * 40 + "ms");
  }
hints.forEach(hintsOn);