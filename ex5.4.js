const toWeirdCase = str => str.split('').map((letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('');

