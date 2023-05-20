const logCheckBoxStatus = (id) => {
    const selectedBox = document.getElementById(id);
    console.log(selectedBox.checked)
}


const printNumTimes = (num, emptyValue = "") => {
    // console.log(num);
    // debugger
    
    resultValue = emptyValue
    resultValue += num + ", "
    num--;

    if(num > 0){
        return printNumTimes(num, resultValue);
    }else{
        return resultValue;
    }
}