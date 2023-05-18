/**********MY SOLUTION ********/

//get the values to perform the calculation
//check if the values are complete
//perform calculation in a calculateTip function
//return the result of calculateTip() and display in the right DOM element



const isValuesComplete = (costEle, tipEle, numOfPeopleEle) => {
    const hasCostValue = costEle.length > 0;
    const hasTipValue = tipEle.length > 0;
    const hasPeopleValue = numOfPeopleEle.length > 0;

    return hasCostValue && hasTipValue && hasPeopleValue
}

const setSplitAmount = (valueOfCost, valueOfTip, valueOfPeople) =>{
    const c = parseFloat(valueOfCost); //parseFloat() converts the string values to float numbers
    const t = parseFloat(valueOfTip) / 100;
    const n = parseFloat(valueOfPeople)

    const result = (c + c*t) / n;
    
    return result.toFixed(2)
}
    




//perform calculation in a calculateTip function
const calculateTip = () =>{
    //get DOM elements
    const costEle = document.getElementById("cost");
    const tipEle = document.getElementById("tip");
    const numOfPeopleEle = document.getElementById("numberOfPeople");
    const payEle = document.getElementById("pay"); //to display the result



    //get the values to perform the calculation
    const valueOfCost = costEle.value;
    const valueOfTip = tipEle.value;
    const valueOfPeople = numOfPeopleEle.value;



    //check if the values are complete
    const hasAllFields = isValuesComplete(valueOfCost, valueOfTip, valueOfPeople)
    if(hasAllFields){
        let resultToDisplay = setSplitAmount(valueOfCost, valueOfTip, valueOfPeople);
        payEle.innerText = `$ ${resultToDisplay}`;

    }else{
        console.log("values not conplete");
    }

    // console.log(hasAllFields)
}

    
