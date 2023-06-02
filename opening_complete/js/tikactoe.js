// console.log("tictaktoe")
const hasX = id =>{
    return getById(id).classList.contains("x");
}
const hasO = id =>{
    return getById(id).classList.contains("o");
}
const hasXorO = (id) =>{
    hasX(id) || hasO(id);
}


const arr = [
    [true, true, true, 1],
    [true, false, true, 2],
    [true, true, true, 3],
    [true, true, true, 4],
    [true, true, true, 5],
    [true, true, true, 6],
    [true, true, true, 7],
    [true, true, true, 8],
    [true, true, true, 9],
    [true, true, true, 10]
]

const checkWin = (arr) => {
    let result = null;
    arr.forEach(eachArr => {
        if (eachArr[0] && eachArr[1] && eachArr[2]) {
            result = eachArr[3];
            console.log(result)
        }
    });
    return result;
};


console.log(checkWin(arr))

const getXScoringChances = () => {
    const combinations = [
        [!hasXorO(1), hasX(2), hasX(3), 1], // horizontal [ox!=1, x=2, x=3]
        [hasX(1), !hasXorO(2), hasX(3), 2], // horizontal [x=1, ox!=2, x=3]
        [hasX(1), hasX(2), !hasXorO(3), 3], // horizontal [x=1, x=2, ox!=3]
        
        [!hasXorO(4), hasX(5), hasX(6), 4], // horizontal [ox!=4, x=5, x=6]
        [hasX(4), !hasXorO(5), hasX(6), 5], // horizontal [x=4, ox!=5, x=6]
        [hasX(4), hasX(5), !hasXorO(6), 6], // horizontal [x=4, x=5, ox!=6]
    
        [!hasXorO(7), hasX(8), hasX(9), 7], // horizontal [ox!=7, x=8, x=9]
        [hasX(7), !hasXorO(8), hasX(9), 8], // horizontal [x=7, ox!=8, x=9]
        [hasX(7), hasX(8), !hasXorO(9), 9], // horizontal [x=7, x=8, ox!=9]
    
        [!hasXorO(1), hasX(4), hasX(7), 1], // vertical [ox!=1, x=4, x=7]
        [hasX(1), !hasXorO(4), hasX(7), 4], // vertical [x=1, ox!=4, x=7]
        [hasX(1), hasX(4), !hasXorO(7), 7], // vertical [x=1, x=4, ox!=7]
    
        [!hasXorO(2), hasX(5), hasX(8), 2], // vertical [ox!=2, x=5, x=8]
        [hasX(2), !hasXorO(5), hasX(8), 5], // vertical [x=2, ox!=5, x=8]
        [hasX(2), hasX(5), !hasXorO(8), 8], // vertical [x=2, x=5, ox!=8]
    
        [!hasXorO(3), hasX(6), hasX(9), 3], // vertical [ox!=3, x=6, x=9]
        [hasX(3), !hasXorO(6), hasX(9), 6], // vertical [x=3, ox!=6, x=9]
        [hasX(3), hasX(6), !hasXorO(9), 9], // vertical [x=3, x=6, ox!=9]
    
        [!hasXorO(1), hasX(5), hasX(9), 1], // diagnal [ox!=1, x=5, x=9]
        [hasX(1), !hasXorO(5), hasX(9), 5], // diagnal [x=1, ox!=5, x=9]
        [hasX(1), hasX(5), !hasXorO(9), 9], // diagnal [x=1, x=5, ox!=9]
    
        [!hasXorO(3), hasX(5), hasX(7), 3], // diagnal [ox!=3, x=5, x=7]
        [hasX(3), !hasXorO(5), hasX(7), 5], // diagnal [x=3, ox!=5, x=7]
        [hasX(3), hasX(5), !hasXorO(7), 7], // diagnal [x=3, x=5, ox!=7]
    ];
    return combinations;
}

const hasXScored = () => {
    const combinations = [
        [hasX(1), hasX(2), hasX(3)],
        [hasX(4), hasX(5), hasX(6)],
        [hasX(7), hasX(8), hasX(9)],
        [hasX(1), hasX(4), hasX(7)],
        [hasX(2), hasX(5), hasX(8)],
        [hasX(3), hasX(6), hasX(9)],
        [hasX(1), hasX(5), hasX(9)],
        [hasX(3), hasX(5), hasX(7)],
    ];
    for(let x = 0; x < combinations.length; x++){
        const data = combinations[x];
        if(data[0] && data[1] && data[2]){
            return true;
        }
    }
    return false;
}

const allBoxesTaken = () => {
    const combinations = [
        hasXorO(1), hasXorO(2), hasXorO(3),
        hasXorO(4), hasXorO(5), hasXorO(6),
        hasXorO(7), hasXorO(8), hasXorO(9),
    ];
    return !combinations.includes(false);
}
