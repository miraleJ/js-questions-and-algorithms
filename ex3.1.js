const yearsToGrowth = (p0, precent, aug, p) => {
    let i = 0;
    precent = precent / 100;
    do {
        p0 = p0 + p0 * precent + aug;
        i++;
    } while (p0 < p);

    return i;
}