// https://crudcrud.com/api/217f6bbc119e41fb9a72a5bd974ce316/<resource> 

const apiKey = "edc7b25743dc4c089a0fe979610b0817";
const resource = "people";
const personId = "648517df456f2b03e80bca9b"
const requestUrl = `https://crudcrud.com/api/${apiKey}/${resource}`;

const body = {
    name: "newName",
    skinColor: "dark"
}

const data = {
    method: "POST", //states the request type of this data
    headers: {
        'Accept': 'application/json', //type of data expected
        'Content-Type': 'application/json' //type of data sent
    },
    body: JSON.stringify(body)
}


// fetch(requestUrl, data).then(data => data.json().then(data => {
//     console.log(data);
// })).catch(err => console.log(err));


//refactor the request function using async await

const makeFetch = async () => {
    const response = await fetch(requestUrl,data);
    const dataToJSON = await response.json();
    console.log(dataToJSON);
}


makeFetch().catch(err => console.log(err));