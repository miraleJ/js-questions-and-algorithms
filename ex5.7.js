const shortestWordLength = str => str.split(' ').reduce(((min,word) => word.length < min ? word.length : min));

console.log(shortestWordLength('123 1234 12345 12'))