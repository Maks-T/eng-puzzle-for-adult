let sentence = `

There aren't any pens here.

`;

sentence = sentence
  .trim()
  .toLowerCase()
  .replace(/[\s.,%?]/g, "_")
  .replace("'", "-");

sentence = sentence.slice(0, sentence.length - 1);

console.log(sentence);
