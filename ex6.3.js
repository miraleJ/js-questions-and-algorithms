const longest = (s1, s2) => 'abcdefghijklmnopqrstuvwxyz'.split('').filter(letter => s1.includes(letter) || s2.includes(letter)).join('');

console.log(longest('abcz', 'xucdex'));