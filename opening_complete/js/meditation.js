
//show directions on click
const meditationStartBtn = () => {
    //meditationDirections
    //meditationStart
    //remove the class displayNone for this element 
    const meditationDirections = getById("meditationDirections")
    meditationDirections.classList.remove("displayNone")
    //add the class "displayNone" to the start element
    const meditationStart = getById("meditationStart")
    meditationStart.classList.add("displayNone")
}

//start meditation on click
const meditationStart = () =>{
    //hide directions
    const meditationDirections = getById("meditationDirections")
    meditationDirections.classList.add("displayNone")
    
    //do the meditation set (call the up-down function 4x)
        //show the up arrow for a few seconds then
        //show the down arrow for a few seconds 

    doMeditationSet(4);
    

}



//meditation sets
const doMeditationSet = (num) => {
    // repeat breathing set function n times
    let timer = 0;
    for(let i=0; i<num; i++){
        setTimeout(()=>{
            breadthingSet();
        }, timer);
        timer += 6000;
    }

    setTimeout(()=>{
        resetToHomeScreen();
    }, timer)
    
}

const breatheIn =() => {
    //show the up arrow 
    const upArrow = getById("breatheIn");
    const downArrow = getById("breatheOut");
    upArrow.classList.remove("displayNone");
    downArrow.classList.add("displayNone")
}

const breatheOut =() => {
    //show the down arrow 
    const downArrow = getById("breatheOut");
    const upArrow = getById("breatheIn");
    downArrow.classList.remove("displayNone");
    upArrow.classList.add("displayNone");
}

const breadthingSet = () =>{
    breatheIn();
    setTimeout(()=>{
        breatheOut();
    }, 3000);
}

//reset to start screen
const resetToHomeScreen = () => {
    const meditationDirections = getById("meditationStart")
    meditationDirections.classList.remove("displayNone")
    const downArrow = getById("breatheOut");
    downArrow.classList.add("displayNone")
}