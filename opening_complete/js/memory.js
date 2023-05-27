//mgStartBtn

const mgStartBtn = getById("mgStartBtn");
const mgDirections = getById("mgDirections");
const mgHomeScreen = getById("mgHomeScreen")

const showMGDirections = () => {
    mgDirections.removeAttribute("nodisplay")
    mgHomeScreen.setAttribute("mgHomeScreen")
}

const memoryGameStart = () => {

}