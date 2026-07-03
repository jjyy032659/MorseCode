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

const MORSE_TO_ENGLISH ={};

Object.keys(ENGLISH_TO_MORSE).forEach(key => {
    MORSE_TO_ENGLISH[ENGLISH_TO_MORSE[key]]=key
});






function EnglishToMorse(englishText) {
let englishText_uppercase = englishText.toUpperCase();
let englishList = englishText_uppercase.trim().split(/\s+/).join(" ").split("");
//
console.log(englishList)
let output=englishList.map((char) => {
 if(char === " ") {
    return " ";
  }else if(ENGLISH_TO_MORSE[char]) {
    return ENGLISH_TO_MORSE[char];
  }else{
    return "";
  }
})

let filterOutput=output.filter(char => char !== "")

let finalOutput=filterOutput.map((char) => {
    if(char===" "){
        return "/";
    }
    return char;
});
return finalOutput.join(" ");
}

function MorseToEnglish(morseText) {
let morselist=morseText.split(" / ");
console.log(morselist)

let output= morselist.map((mcode)=>{
  let singleChar=mcode.split(" ");
   //console.log(singleChar)//[ '....', '..' ]
  let singleWord=singleChar.map((c)=>{
    if(MORSE_TO_ENGLISH[c]){ return MORSE_TO_ENGLISH[c]

    }else{
      return ""
    }
   
  })


 return singleWord.join("");
})

let filteredOutput = output.filter(word => word !== "");
return filteredOutput.join(" ");


// let outputText= output.join(" ");

// return outputText;

}


// console.log(MorseToEnglish(" / ....../ .... .."))
//console.log(EnglishToMorse(""))
const isMorse = /^[.\-\/\s]+$/.test("....");
console.log(isMorse)



if (typeof module !== "undefined" && module.exports) {
  module.exports = { EnglishToMorse, MorseToEnglish, ENGLISH_TO_MORSE, MORSE_TO_ENGLISH };
}