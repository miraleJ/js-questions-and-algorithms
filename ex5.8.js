const shortestWordLength = str => str.split(' ').reduce(((max,word) => word.length > max ? word.length : max), 0);

console.log(shortestWordLength('123 1234 12345 12'));