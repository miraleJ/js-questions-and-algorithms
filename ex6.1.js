const accum = str => str.split('').map((letter, i) => letter.repeat(i + 1).concat('-')).join('').slice(0, -1);

console.log(accum('1234567'));