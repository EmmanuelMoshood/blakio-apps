//store strings in an object
const mgString = {
    mgStartBtn : "mgStartBtn",
    mgDirections : "mgDirections",
    mgHomeScreen : "mgHomeScreen",
    mgBoard : "mgBoard",
    memoryHighlight : "memoryHighlight",
    nodisplay : "nodisplay"
}
//utilities
const setAttr = (domElement, attributeName, attributeValue) => {
    domElement.setAttribute(attributeName , attributeValue);
}
const removeAttr = (domElement, attributeName) => {
    domElement.removeAttribute(attributeName);
}
const addClass = (id, className) =>{
    getById(id).classList.add(className)
}
const removeClass = (id, className) =>{
    getById(id).classList.remove(className)
}
// const addHighlight = (id) =>{
//     // getById(id).classList.add("memoryHighlight")
//     addClass(id, mgString.memoryHighlight)
// }
// const removeHighlight = id =>{
//     // getById(id).classList.remove("memoryHighlight")
//     removeClass(id, mgString.memoryHighlight)
// }
const cpuClick = (move) => {
    getById(move).classList.add("cpuClick");
    setTimeout(() => {
        getById(move).classList.remove("cpuClick");
    }, 500);
}



//selectors
const mgStartBtn = getById(mgString.mgStartBtn);
const mgDirections = getById(mgString.mgDirections);
const mgHomeScreen = getById(mgString.mgHomeScreen)
const mgBoard = getById(mgString.mgBoard)



/*******************functionalities for the game*/
//variables
//array of available tiles to pick from
const mgTileOptions = [
    "mgTopLeft",
    "mgTopRight",
    "mgBottomLeft",
    "mgBottomRight"
]
//array of what moves the cpu is making 
let cpuMoves = []
//says whose turn is to play
let isCPUTurn = true;
let clickIndex = 0;

const showMGDirections = () => {
    console.log("showMGDirections()")

    // mgDirections.removeAttribute("nodisplay");
    // console.log(mgDirections)
    removeAttr(mgDirections, mgString.nodisplay);
    // mgHomeScreen.setAttribute(mgString.mgHomeScreen);
    setAttr(mgHomeScreen, mgString.nodisplay, "");
}
const memoryGameStart = () => {
    console.log("memoryGameStart()")
    removeAttr(mgBoard, mgString.nodisplay);
    setAttr(mgDirections, mgString.nodisplay, "");
    //cpu plays after 1 second
    setTimeout(() => {
        cpuMove();
    }, 1000)
}
const cpuMove = () =>{
    isCPUTurn = true;

    //cpu get random index from mgTileOptions array
    console.log("cpuMove()");
    const move = getRandomItemFromArray(mgTileOptions);
    console.log(move);
    //store selected move in a var cpuMoves
    cpuMoves.push(move);

    let delay = 0;
    cpuMoves.forEach(move =>{
        setTimeout(()=>{
            cpuClick(move);
        }, delay);
        delay += 1000; //do the clicks 1 sec apart
    })
    console.log(`flashed cpuMove ${move}`);
    isCPUTurn = false; //turns off cpu's turn
}


const makeMemoryGuess = id =>{
    //checks to confirm it is player's turn
    if(isCPUTurn) return;
    //checks if player's guess is same as id of cpu move at that index
    if(id === cpuMoves[clickIndex]){
        clickIndex++;
        console.log("correct move")
            if(clickIndex === cpuMoves.length){
                clickIndex = 0;
                setCurrentScrore();
                setTimeout(()=>{ //adds delay of a second before calling the cpu's next move
                    cpuMove();
                }, 1000);
            }
    }else{
        console.log("wrong move .........GAME OVER!........");
        gameOver();
    }
}

let score = 0; //starting value of score 
const setCurrentScrore = () =>{
    //take the scoreEle and assign the score value
    //score value starts from 1 and is incremented whenever this function is called 
    score += 1; 
    const scoreElement = getById("mgCount");
    scoreElement.innerText = score; 
    console.log(score);
    setHighScore(score);
}
const reset_mg = () =>{
    score = 0;
    getById("mgCount").innerText = score; 
    cpuMoves = [];
    isCPUTurn = true;
    clickIndex = 0;
}
const gameOver = () =>{
    reset_mg();
    setAttr(mgBoard, mgString.nodisplay);
    removeAttr(mgHomeScreen, mgString.nodisplay, "");
}

const setHighScore = (score) =>{
    let currentHighScore = "mgHighScore" //key used for highscore in Local storage
    let storedHighScore = localStorage.getItem(currentHighScore);

    if(!storedHighScore){//highscore doesnot exist
        let highScore = 1;
        //set highScore of 10 to the localStorage
        localStorage.setItem(currentHighScore, highScore);
    }

    if(score > storedHighScore){
        storedHighScore = score;
    }

    getById("mgHighScore").innerText = storedHighScore;
}