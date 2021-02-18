const calc = (operation, num1, num2) => {
    let ans;
    switch (operation) {
        case '+':
            ans = num1 + num2;
            break;
        case '-':
            ans = num1 - num2;
            break;
        case '*':
            ans = num1 * num2;
            break;
        case '/':
            ans = num1 / num2;
            break;
    
        default:
            break;
    }
    return ans;
}
