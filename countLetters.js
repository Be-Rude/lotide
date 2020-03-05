const countLetters = function(sentence) {
  let splitSentence = sentence.split("");
  const result = {};
  
  for (const letters of splitSentence) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};
  
console.log(countLetters("Lighthouse"));