const wordsStrEn = 'mentioned arrived uncertain performance misunderstood';
const wordsEn = wordsStrEn.split(' ');

const wordsStrRu = 'упомянул прибыл неопределенно выступление';
const wordsRu = wordsStrRu.split(' ');

const wordsStrTr = `menʃnd əˈraɪvd ʌnˈsɜːtn pəˈfɔːməns mɪsʌndəˈstʊd`;
const wordsTr = wordsStrTr.split(' ');

const wordsJSON = [];

wordsEn.forEach((word, index) => {
  const wordObj = {};

  wordObj.ru = wordsRu[index];
  wordObj.en = word.split('').join(' ');
  wordObj.addWord = '';
  wordObj.audioEnUrl = `https://wooordhunt.ru/data/sound/sow/uk/${word}.mp3`;
  wordObj.transcript = wordsTr.length ? '[' + wordsTr[index] + ']' : '';

  wordsJSON.push(wordObj);
});

console.log(JSON.stringify(wordsJSON));
