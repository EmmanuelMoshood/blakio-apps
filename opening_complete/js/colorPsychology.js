//to add a new div to the DOM 
const addNewDiv = () =>{
    //create and add style to the div
    const newDiv = document.createElement("div") //"div" is the tag I want to create
    newDiv.classList.add("myNewDiv") //"myNewDiv" is a class in css I will use to style this new div

    //determine where this div is going to show up 
    const existingElement = document.getElementById("portfolioRight");//this is an element from the DOM
    existingElement.appendChild(newDiv); //appends the new div to an existing element to make it show on the DOM
}


//html element to be created dynamically
{/* <div class="btn cpRed">Excitement</div>  */}

// const colorPsychologyContainer = document.getElementById("colorPsychology");
//create new element that is a button
// const newElement = document.createElement("button")
//set the class of the element to cpRed
// newElement.classList.add("cpRed")
// newElement.classList.add("btn")
//set the innerText og the button to "Excitement"
// newElement.innerText = "Excitement"
//append the new element to the div with ID "colorPsychology"
// colorPsychologyContainer.appendChild(newElement)


//to iterate through all the key value pairs in the color object
for(let psycholology in colorMap){
    // console.log(psycholology);
    // console.log(colorMap[psycholology]);

    const colorPsychologyContainer = document.getElementById("colorPsychology");
    //create new element that is a button
    const newElement = document.createElement("button")
    //set the class of the element to cpRed
    newElement.classList.add(colorMap[psycholology])
    newElement.classList.add("btn")
    //set the innerText og the button to "Excitement"
    newElement.innerText = psycholology
    //append the new element to the div with ID "colorPsychology"
    colorPsychologyContainer.appendChild(newElement)

}