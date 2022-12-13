const { getCurrentMonth } = require("../app");
const { isAdmin } = require("../app");
const { isValidName } = require("../app");

jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));

describe("app tests suites - getCurrentMonth", () => {
    test("should return the current month", () => {
        const result = getCurrentMonth();
        expect(result).toBe("January");
    });
});

describe("app tests suites - isAdmin", () => {
    test("should return false as user is not admin", () => {
        const result = isAdmin();
        expect(result).toBe(false);
    });

    test("should return true as user is admin", () => {
        const result = isAdmin("admin");
        expect(result).toBe(true);
    });
});

describe("app tests suites - isValidName", () => {
    test("should return a array without words with x or X", () => {
        const noms = ["Momo", "xena", "Hadji", "Leo", "JC", "DMX", "JeanKevin"];
        const result = isValidName(noms);
        expect(result).toEqual(["Momo", "Hadji", "Leo", "JC", "JeanKevin"]);
    });
});

describe("app tests suites - isValidName", () => {
    test("should return a array without words with x or X 2 ", () => {
        const noms = ["Momo", "JeanKevin"];
        const result = isValidName(noms);
        expect(result).toEqual(["Momo", "JeanKevin"]);
    });
});
