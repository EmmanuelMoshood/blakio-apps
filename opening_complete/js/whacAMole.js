//ids of elements in wam game
const wamString = {
    whakAMoleHome : "whakAMoleHome",
    whacAMoleDirections:"whacAMoleDirections"
}


let random = null;

let initialCount = 0;

let goHome = false;

let canClick = true;

const wamKey = "whakamoleHighScore";

let whakamoleHighScore;


const whakAMoleText = {
    intro: "Whak the mole to score! Click to play.",
    endText: "You have scored X"
}

const whacPositions = [
    "topOne",
    "topTwo",
    "topThree",
    "middleOne",
    "middleTwo",
    "middleThree",
    "bottomOne",
    "bottomTwo",
    "bottomThree"
];

const flashRed = className => {
    const square = document.querySelector(`.whacAMole.${className}`);
    square.classList.add('hitMole');
    setTimeout(()=>{
        square.classList.remove('hitMole');
    },400);
}

const changeMolePosition = () => {
    const mole = document.querySelector(".whacAMole.mole");
    mole.classList.remove("mole");
    const randomIndex = Math.floor(Math.random() * whacPositions.length);
    const newMolePosition = whacPositions[randomIndex];
    document.querySelector(`.whacAMole.${newMolePosition}`).classList.add("mole");
}

const increamentWhacCount = () => {
    const currentCount = parseInt(getById("whacAMoleCount").innerText);
    getById("whacAMoleCount").innerText = currentCount + 1;
}

const whacMole = className => {
    const hitMole = document.querySelector(
        `.whacAMole.${className}`
    ).classList.contains("mole");
    if(hitMole){
        increamentWhacCount();
        flashRed(className);
    }
}

const randomizeMole = () => {
    changeMolePosition();
    random = setInterval(() => {
        changeMolePosition();
    }, 1000);
}

const whacAMoleMenuStart = () => {
    toggleAttribute(getById(wamString.whakAMoleHome), "nodisplay");

    toggleAttribute(getById(wamString.whacAMoleDirections), "nodisplay");
    whacAMoleDirections.innerText = whakAMoleText.intro;
}

const resetwhacAMoleGame = () => {
    const whacAMoleDirections = getById(wamString.whacAMoleDirections);

    toggleAttribute(whacAMoleDirections, "nodisplay");
    toggleAttribute(whacAMoleDirections, "opacity");

    whacAMoleDirections.innerText = whakAMoleText.endText.replace(
        "X",
        getById("whacAMoleCount").innerText
    );

    clearInterval(random);
    canClick = false;
    setTimeout(() => {
        getById("whacAMoleCount").innerText = 10;

        toggleAttribute(whacAMoleDirections, "opacity");
        toggleAttribute(whacAMoleDirections, "nodisplay");

        const whacAMoleBoard = getById("whacAMoleBoard");
        toggleAttribute(whacAMoleBoard, "nodisplay");

        const whakAMoleHome = getById(wamString.whakAMoleHome);
        toggleAttribute(whakAMoleHome, "nodisplay");

        canClick = true;
    }, 4000);
}

const startTimer = () => {
    getById("whacAMoleCountDown").innerText = 20;
    let check = setInterval(() => {
        const seconds = parseInt(getById("whacAMoleCountDown").innerText);
        const count = seconds - 1;
        if(count === 0){
            clearInterval(check);
            resetwhacAMoleGame();
            setWhakAMoleHighScoreIfHigher();
        } else {
            getById("whacAMoleCountDown").innerText = count;
        }
    }, 1000);
}

const whacAMoleStart = () => {
    if(canClick)
         whacAMoleDirections = getById(wamString.whacAMoleDirections);
        toggleAttribute(whacAMoleDirections, "nodisplay");

        const whacAMoleBoard = getById("whacAMoleBoard");
        toggleAttribute(whacAMoleBoard, "nodisplay");

        randomizeMole();
        startTimer();
        getById("whacAMoleCount").innerText = initialCount;
    
}

const setWhakAMoleHighScoreIfHigher = () => {
    const score = parseInt(getById("whacAMoleCount").innerText);
    whakamoleHighScore = getById("whakamoleHighScore").innerText;
    if(score > whakamoleHighScore){
        setWhakAMoleHighScore(score);
    }
}

const setWhakAMoleHighScore = score => {
    whakamoleHighScore = localStorage.getItem(wamKey);
    if(!whakamoleHighScore) {
        localStorage.setItem(wamKey, 0);
    }
    if(score){
        localStorage.setItem(wamKey, score);
    }
    whakamoleHighScore = parseInt(localStorage.getItem(wamKey));
    getById("whakamoleHighScore").innerText = whakamoleHighScore;

}

setWhakAMoleHighScore();




const GameResetBtn = getById("GameResetBtn");

