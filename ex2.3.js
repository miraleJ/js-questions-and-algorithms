const findNextSquare = (num = 0) => {
    const sqrtNum = Math.sqrt(num);
    return Math.floor(sqrtNum) == sqrtNum ? (sqrtNum + 1) * (sqrtNum + 1) : -1;
}

console.log(findNextSquare());
console.log(findNextSquare(4));
console.log(findNextSquare(16));
console.log(findNextSquare(11));
console.log(findNextSquare(77));
