/*********************************************** WORKING WITH CHECKED INPUT */
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

/*********************************************** UNDERSTANDING PROMISES */

// "PRODUCING CODE"  - takes time to complete
// "COMSUMING CODE"  - needs to wait to see if producing code "resolve" or "reject"  ie successful/failed
// A PROMISE  -   an object that links producing code and consuming code

//custom promise
//producing code
// const producingCode = (resolve, reject) =>{
//     setTimeout(()=>{
//         console.log("This is the producing code");
//         resolve();
//         reject();
//     }, 4000)
// }
//consuming code
//on success


//producing code "writeText()" copying text in the browser, using an in-built js promise
// const navigatorObj = navigator.clipboard.writeText("This is the hard copied text copied")

//consuming code
//on success
const onSucces = () => {
    console.log("well copied")
}
//on failure
const onFailure = (err) => {
    console.log("error copying text:", err)
}
// connect produing code and consuming code
// navigatorObj.then(onSucces).catch(onFailure)


/******************************************** PASSWORD GENERATOR */

const generatePassword = () => {
    const arr = getCheckedBoxes()
    const str = getRandomCharacters(arr)
    displayPassword(str)
    console.log(str)
}

const getCheckedBoxes = () => {
    // debugger
    //get the elements with check boxes
    const upperCaseLettersCheckbox = getById("upperCaseLettersCheckbox")
    const lowerCaseLettersCheckbox = getById("lowerCaseLettersCheckbox")
    const passwordNumbersCheckbox = getById("passwordNumbersCheckbox")
    const specialCharactersCheckbox = getById("specialCharactersCheckbox")
    //check if the elements are checked 
    const upperIsChecked = upperCaseLettersCheckbox.checked
    const lowerIsChecked = lowerCaseLettersCheckbox.checked
    const numIsChecked = passwordNumbersCheckbox.checked
    const specialCharIsChecked = specialCharactersCheckbox.checked
    //make list of values to use based on checked elements
    let allCheckedValues = []
    //store the values of each element type in varaibles
    const upperCaseLetters = "ABCDE"; //how can I use regex in this situation
    const lowerCaseLetters = "abcde";
    const passwordNumbers = "1234567890";
    const specialCharacters = "!@#$%^&*()";

    //check is each situation is true
    if(upperIsChecked){
        allCheckedValues.push(upperCaseLetters);
    }
    if(lowerIsChecked){
        allCheckedValues.push(lowerCaseLetters);
    }
    if(numIsChecked){
        allCheckedValues.push(passwordNumbers);
    }
    if(specialCharIsChecked){
        allCheckedValues.push(specialCharacters);
    }
    console.log(allCheckedValues)
    return allCheckedValues; //returns an array of the values of checked boxes

}


const getRandomCharacters = (array, emptyStr = "")  => {
    // debugger
    let randomCharacters = emptyStr;
    array.forEach(stringItem =>{
        const char = getRandomCharFromString(stringItem);
        randomCharacters += char
    })
    if(randomCharacters.length < 8){ // 8 is a magic number, to make sure length of password is atleast 8 chars long
        return getRandomCharacters(array, randomCharacters)
    } else{
        console.log(randomCharacters)
        return randomCharacters
    }
}

const displayPassword = (str) => {
    const passwordScreen = getById("passwordBtn")
    passwordScreen.innerText = str
}

const copyPassword = () => {
    //to copy text programmatically
    //using an inbuilt js promise (object), navigator
    //get innerText of password screen
    const passwordCopied = getById("passwordBtn").innerText;
    navigator.clipboard.writeText(passwordCopied).then(()=>{
        const passwordScreen = getById("passwordBtn")
        passwordScreen.innerText = "Copied!"
        setTimeout(()=>{
            passwordScreen.innerText = passwordCopied
        }, 2000)
    }).catch(err =>{
        prompt("there's nothing to copy to clipboard")
        console.log("error :", err)
    })
}