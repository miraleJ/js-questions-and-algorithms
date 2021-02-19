const maskify = str => str.length <= 4 ? str : str.slice(0,4).concat('#'.repeat(str.length - 4));
