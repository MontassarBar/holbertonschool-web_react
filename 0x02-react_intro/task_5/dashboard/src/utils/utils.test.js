const { getFullYear, getFooterCopy, getLatestNotification } = require('../src/utils');

test("return the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

test("When isIndex is true, the getFooterCopy function should return 'Holberton School'", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
});

test("When isIndex is false, the getFooterCopy function should return 'Holberton School main dashboard'", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("return '<strong>Urgent requirement</strong> - complete by EOD'" , () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
});