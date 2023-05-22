

//quoteText
//breakingBadAuthor
//quote

// console.log(quotes)

const getQuote = () => {
    //i have an array of quotes objects
    //pick an object at random
    //then take the quote and author into variables 
    //display the variable content on the DOM in thei respective elements



    //get item from array at random
    const quoteSelected = getRandomItemFromArray(quotes);
    console.log(quoteSelected)

    //store quote and author separately in variables
    const {quote, author} = quoteSelected
    console.log(quote);
    console.log(author);

    //display the variable content on the DOM in thei respective elements
    const displayedQuote = getById("quoteText");
    const displayedAuthor = getById("breakingBadAuthor")

    displayedQuote.innerText = quote;
    displayedAuthor.innerText = author;
    
}