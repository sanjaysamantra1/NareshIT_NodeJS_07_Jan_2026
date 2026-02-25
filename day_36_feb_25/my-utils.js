function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

function sumOfDigits(num) { // n = 125
    let sum = 0;
    while (num != 0) {
        let rem = num % 10;
        sum = sum + rem;
        num = Math.floor(num / 10);
    }
    return sum;
}

function repeatString(str, times) {
    return str.repeat(times);
}

module.exports = {
    fibonacci,
    isPrime,
    sumOfDigits,
    repeatString
}