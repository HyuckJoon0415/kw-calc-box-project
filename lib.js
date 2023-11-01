function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return num > 1;
}

function fact(num) {
    let mul = 1;
    for (let i = 1; i <= num; i++) {
        mul *= i;
    }
    return mul;
}

module.exports = {
    avg,
    prime,
    fact,
};

/*
exports.avg = avg;
exports.prime = prime;
exports.fact = fact;
*/
