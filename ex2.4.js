const findUnique = arr => {
    if (arr[0] === arr[1]) {
        return arr.find(val => val != arr [0]);
    } else if (arr[0] === arr[2]) {
        return arr[1];
    } else {
        return arr[0];
    }
}
