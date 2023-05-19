//to add a new div to the DOM 
const addNewDiv = () =>{
    //create and add style to the div
    const newDiv = document.createElement("div") //"div" is the tag I want to create
    newDiv.classList.add("myNewDiv") //"myNewDiv" is a class in css I will use to style this new div

    //determine where this div is going to show up 
    const existingElement = document.getElementById("portfolioRight");//this is an element from the DOM
    existingElement.appendChild(newDiv); //appends the new div to an existing element to make it show on the DOM

}