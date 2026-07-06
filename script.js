const ENGLISH_TO_MORSE = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const MORSE_TO_ENGLISH = {};

Object.keys(ENGLISH_TO_MORSE).forEach((key) => {
  MORSE_TO_ENGLISH[ENGLISH_TO_MORSE[key]] = key;
});

if (typeof document !== "undefined") {
  const translateBtn = document.getElementById("translateBtn");
  const inputBox = document.getElementById("inputBox");
  const outputBox = document.getElementById("outputBox");

  translateBtn.addEventListener("click", () => {
    let inputText = inputBox.value;

    if (inputText.trim() === "") {
      outputBox.value = "Please enter text";
      return;
    }

    let language = detectInput(inputText);

    if (language === "Morse") {
      outputBox.value = MorseToEnglish(inputText);
    } else if (language === "English") {
      outputBox.value = EnglishToMorse(inputText);
    }
  });
}
const detectInput = (input) => {
  if (!input.trim()) return "English";
  return /^[.\-\/\s]+$/.test(input) ? "Morse" : "English";
};

const EnglishToMorse = (englishText) => {
  let englishTextUppercase = englishText.toUpperCase();
  let englishList = englishTextUppercase
    .trim()
    .split(/\s+/)
    .join(" ")
    .split("");

  let output = englishList.map((char) => {
    if (char === " ") {
      return " ";
    } else if (ENGLISH_TO_MORSE[char]) {
      return ENGLISH_TO_MORSE[char];
    } else {
      return "";
    }
  });

  let filterOutput = output.filter((char) => char !== "");

  let finalOutput = filterOutput.map((char) => {
    if (char === " ") {
      return "/";
    }
    return char;
  });
  return finalOutput.join(" ");
};

const MorseToEnglish = (morseText) => {
  let morselist = morseText.split(" / ");

  let output = morselist.map((mcode) => {
    let singleChar = mcode.split(" ");

    let singleWord = singleChar.map((c) => {
      if (MORSE_TO_ENGLISH[c]) {
        return MORSE_TO_ENGLISH[c];
      } else {
        return "";
      }
    });
    return singleWord.join("");
  });

  let filteredOutput = output.filter((word) => word !== "");
  return filteredOutput.join(" ");
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    EnglishToMorse,
    MorseToEnglish,
    detectInput,
    ENGLISH_TO_MORSE,
    MORSE_TO_ENGLISH,
  };
}
