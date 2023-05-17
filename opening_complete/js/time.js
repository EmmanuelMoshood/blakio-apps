//target elements
const hourEle = document.getElementById("hr")
const minEle = document.getElementById("min")
const secEle= document.getElementById("sec")



// change value at interval
const callTime = () => {
    const myDate = new Date();

    let hr = myDate.getHours()
    let min = myDate.getMinutes()
    let sec = myDate.getSeconds()

    hourEle.innerText = hr;
    minEle.innerText = min;
    secEle.innerText = sec;

    // return console.log([hr, min, sec])
}

setInterval(callTime, 1000)


