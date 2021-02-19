const isIsogram = str => str.toLowerCase() === str.toLowerCase().split('').reduce((onceLetters, letter) => onceLetters.includes(letter) ? onceLetters : onceLetters.concat(letter), '');

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
console.log(isIsogram('mOose'));
console.log(isIsogram('mOse'));
console.log(isIsogram('isIsogram'));
console.log(isIsogram(''));
