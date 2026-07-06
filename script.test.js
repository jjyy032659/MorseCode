const { EnglishToMorse, MorseToEnglish, detectInput } = require("./script");

describe("detectInput function", () => {
  test("should detect pure English text as 'English'", () => {
    expect(detectInput("HELLO")).toBe("English");
    expect(detectInput("hello world")).toBe("English");
  });

  test("should detect pure Morse code as 'Morse'", () => {
    expect(detectInput(".... . .-.. .-.. ---")).toBe("Morse");
    expect(detectInput(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe(
      "Morse",
    );
  });

  test("should default empty or whitespace inputs to 'English'", () => {
    expect(detectInput("")).toBe("English");
    expect(detectInput("   ")).toBe("English");
  });

  test("should detect mixed text (English + Morse symbols) as 'English'", () => {
    expect(detectInput("SOS .... . .-.. .-.. ---")).toBe("English");
    expect(detectInput("Hello -...")).toBe("English");
  });

  test("should detect numbers and special characters as 'English'", () => {
    expect(detectInput("12345")).toBe("English");
    expect(detectInput("Hello!")).toBe("English");
  });
});

describe("EnglishToMorse", () => {
  test("translate a single word", () => {
    expect(EnglishToMorse("HI")).toBe(".... ..");
  });

  test("for multiple words", () => {
    expect(EnglishToMorse("HI THERE")).toBe(".... .. / - .... . .-. .");
  });

  test("unsupported character", () => {
    expect(EnglishToMorse("HI 5")).toBe(".... .. /");
  });

  test("skips punctuation", () => {
    expect(EnglishToMorse("HI!")).toBe(".... ..");
  });

  test("lower case", () => {
    expect(EnglishToMorse("hi there")).toBe(".... .. / - .... . .-. .");
  });

  test("extra space leading or behind or between two words", () => {
    expect(EnglishToMorse("    hi     there    ")).toBe(
      ".... .. / - .... . .-. .",
    );
  });
});

describe("MorseToEnglish", () => {
  test("translate a single word", () => {
    expect(MorseToEnglish(".... ..")).toBe("HI");
  });

  test("invalid input", () => {
    expect(MorseToEnglish("......")).toBe("");
  });

  test("multiple words", () => {
    expect(MorseToEnglish(".... .. / - .... . .-. .")).toBe("HI THERE");
  });
});
