const reverseString = require('./index');

test('Інвертує рядок правильно', () => {
    expect(reverseString("hello")).toBe("ollesh");
    expect(reverseString("12345")).toBe("54321");
});