var toGoatLatin = function (sentence) {
  let vowel = "aeiou";
  let finalSentence = "";
  let sentenceArr = sentence.split(" ");
  for (i = 0; i < sentenceArr.length; i++) {
    let word = sentenceArr[i];
    let m = "m";

    if (vowel.includes(`${word[0].toLowerCase()}`)) {
      finalSentence += word + m + "a".repeat(i + 2) + " ";
    } else {
      let firstChar = word.charAt(0);
      let stringWithoutFirstChar = word.slice(1);
      let result = stringWithoutFirstChar + firstChar;

      finalSentence += result + m + "a".repeat(i + 2) + " ";
    }
  }
  return finalSentence.trim();
};
