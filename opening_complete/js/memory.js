//store strings in an object
const mgString = {
    mgStartBtn : "mgStartBtn",
    mgDirections : "mgDirections",
    mgHomeScreen : "mgHomeScreen",
    mgBoard : "mgBoard",
    nodisplay : "nodisplay"
}
const setAttr = (domElement, attributeName, attributeValue) => {
    domElement.setAttribute(attributeName , attributeValue);
}
const removeAttr = (domElement, attributeName) => {
    domElement.removeAttribute(attributeName);
}


//selectors
const mgStartBtn = getById(mgString.mgStartBtn);
const mgDirections = getById(mgString.mgDirections);
const mgHomeScreen = getById(mgString.mgHomeScreen)
const mgBoard = getById(mgString.mgBoard)

const showMGDirections = () => {
    // mgDirections.removeAttribute("nodisplay");
    // console.log(mgDirections)
    removeAttr(mgDirections, mgString.nodisplay);
    // mgHomeScreen.setAttribute(mgString.mgHomeScreen);
    setAttr(mgHomeScreen, mgString.nodisplay, "");
}

const memoryGameStart = () => {
    console.log("Test function")
    removeAttr(mgBoard, mgString.nodisplay);
    setAttr(mgDirections, mgString.nodisplay, "");
}

