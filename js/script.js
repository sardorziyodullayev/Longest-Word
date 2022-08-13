let showLongestWord = function (text) {
  let wordArray = text.split(" ");

  let longestWord = wordArray[0];

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length < longestWord.length) {
      longestWord = wordArray[i];
    }
  }

  return longestWord;
};

let result = showLongestWord("Najot faqat ta'limda, Ilm ol Najot ta'limda-");
console.log(result);
