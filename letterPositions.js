const letterPositions = function(sentence) {
  const results = {};
  
  let splitSentence = sentence.split("");

  for (const i in splitSentence) {
    let newArray = [];
    if (splitSentence[i] === " ") {
      continue;
    }
    results[splitSentence[i]] = newArray;
  }
  console.log("results: ", results);
  console.log(results.length);
  
  for (let s = 0; s < splitSentence.length; s++) {
    if (splitSentence[s] === " ") {
      continue;
    }
    results[splitSentence[s]].push(s);
  }
  return results;
};

console.log(letterPositions("hello"));