const offscreen = "offscreen";



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