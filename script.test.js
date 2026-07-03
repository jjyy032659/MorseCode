const { EnglishToMorse, MorseToEnglish } = require("./script");

describe("EnglishToMorse",()=>{
test("translate a single word", ()=>{
    expect (EnglishToMorse("HI")).toBe(".... ..");
});

test("for multiple words", ()=>{
    expect(EnglishToMorse("HI THERE")).toBe(".... .. / - .... . .-. .")
})

test("unsupported character", ()=>{
    expect(EnglishToMorse("HI 5")).toBe(".... .. /")
})

test("skips punctuation", () => {
  expect(EnglishToMorse("HI!")).toBe(".... ..")
})

test("lower case", () => {
  expect(EnglishToMorse("hi there")).toBe(".... .. / - .... . .-. .")
})

test("extra space leading or behind or between two words", () => {
  expect(EnglishToMorse("    hi     there    ")).toBe(".... .. / - .... . .-. .")
})




})

describe("MorseToEnglish", ()=>{
    test("translate a single word",()=>{
        expect(MorseToEnglish(".... ..")).toBe("HI")
    })

    test("invalid input",()=>{
        expect(MorseToEnglish("......")).toBe("")
    })

    test("multiple words",()=>{
        expect(MorseToEnglish(".... .. / - .... . .-. .")).toBe("HI THERE")
    })
})