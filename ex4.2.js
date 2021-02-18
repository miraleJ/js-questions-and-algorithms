const tribonacci = (start, nth) => {
    let i = 2;
    let tribSeq = [...start];

    // while we didn't arrived to the nth num of the tribonacci sequence
    while (i < nth) {
        // calculate the next number and push to the array
        tribSeq.push(tribSeq[i-2] + tribSeq[i-1] + tribSeq[i]);
        i++;
    }
    return tribSeq.slice(0, nth);
}
