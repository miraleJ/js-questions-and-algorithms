const binToDecimal = (binArr = []) => [...binArr].reverse().reduce((decNum, bin = 0, i) => decNum + bin * (Math.pow(2, i)))
