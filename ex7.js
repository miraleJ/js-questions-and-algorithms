const myFilter = (arr, conditionFunc) => {
    let filteredArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (conditionFunc(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

const myForEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

const myMap = (arr, func) => {
    let mappedArr = [];

    for (let i = 0; i < arr.length; i++) {
        mappedArr.push(func(arr[i]));
    }
    return mappedArr;
}

console.log(myFilter([1,2,3,4,0], a => a < 3 ? true : false));
console.log(myForEach([1,2,3,4], x => x * 2));
console.log(myMap([1,2,3,4], x => x / 2));