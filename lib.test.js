const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg[3,5,7] should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg[-5,5] should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

test("prime[2] should be true", () => {
    expect(lib.prime([1.1])).toBe(true);
});

test("prime[6] should be false", () => {
    expect(lib.prime([6])).toBe(false);
});

test("fact[5] should be 120", () => {
    expect(lib.fact([5])).toBe(120);
});

test("fact[6] should be 720", () => {
    expect(lib.fact([6])).toBe(720);
});
