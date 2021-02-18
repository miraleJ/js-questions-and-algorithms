const twoSmallest = (numbers = [0, 0, 0, 0]) => {
    //copy arr, sort
    tempNum = [...numbers].sort((a, b) => a-b);
    // return sum of the 2 smallest
    return tempNum[0] + tempNum[1];
}
