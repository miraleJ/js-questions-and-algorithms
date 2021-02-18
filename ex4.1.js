const fibonacci = nth => {
    let i = 1;
    let fibSeq = [1, 1];

    // while we didn't arrived to the nth num of the fibonacci sequence
    while (i < nth) {
        // calculate the next number and push to the array
        fibSeq.push(fibSeq[i-1] + fibSeq[i]);
        i++;
    }
    return nth === 1 ? [1] : fibSeq;
}


