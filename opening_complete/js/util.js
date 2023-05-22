const offscreen = "offscreen";


/************* Switch an element on and off based on its attribute */
const toggleAttribute = (ele, attr, value="") => {
    const hasAttribute = ele.hasAttribute(offscreen);
    if(hasAttribute){
        // remove the offset attribute
        ele.removeAttribute(attr);
    } else {
        // add the offset attribute
        ele.setAttribute(attr, value);
    }
}


const simpleFunc = () => {
    const simElement = document.getElementById("rightSideText")
    const hasAttr = simElement.hasAttribute("simplistic")
    if (hasAttr){
        simElement.removeAttribute("simplistic")
    }else{
        simElement.setAttribute("simplistic", "")
    }
}

/************************************ Return the DOM element selected by ID */
const getById = (id) =>{
    return document.getElementById(id)
}

/************************************ Return random char from string */
const getRandomCharFromString = (str) =>{
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex]
}

/************************************ Return random item from array */
const getRandomItemFromArray = (array) =>{
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
}