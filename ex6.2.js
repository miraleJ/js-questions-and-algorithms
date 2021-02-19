//Map
//return only >1

const numOfDuplicates = str => {
    let lettersMap = new Map();
    lettersMap = str.split('').reduce(((lettersMap, letter) => lettersMap.has(letter) ? lettersMap.set(letter, lettersMap.get(letter) + 1) : lettersMap.set(letter, 1)), lettersMap);
    
    return Array.from(lettersMap.values()).reduce((count, letterCount) => letterCount > 1 ? count + 1 : count, 0);
}

console.log(numOfDuplicates('1a12233a44'));

