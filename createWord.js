const wordsStrEn =
  "hair nose mouth lips tooth teeth tongue cheek forehead cheek shoulder back finger stomach feet temple nostril eyelashes eyebrows ears earlobe jaw skin wrinkle";
const wordsEn = wordsStrEn.split(" ");

const wordsStrRu =
  "волосы нос рот губы зубы зубы язык щека лоб щека плечо спина палец живот ноги висок ноздри ресницы брови уши мочка уха челюсть морщины кожа";

const wordsStrTranscript =
  "hɛr noʊz maʊθ lɪps tuθ tiθ tʌŋ ʧik ˈfɔrhɛd ʧik ˈʃoʊldər bæk ˈfɪŋgər ˈstʌmək fit ˈtɛmpəl ˈnɑstrɪl ˈaɪˌlæʃɪz ˈaɪˌbraʊz ɪrz earlobe ʤɔ skɪn ˈrɪŋkəl";

const wordsTranscript = wordsStrTranscript.split(" ");

const wordsRu = wordsStrRu.split(" ");

const wordsJSON = [];

const dirAudio = "./audios/words1/";

wordsEn.forEach((word, index) => {
  const wordObj = {};

  wordObj.ru = wordsRu[index];
  wordObj.en = word;
  wordObj.addWord = "";
  wordObj.audioEnUrl = dirAudio + word + ".mp3";
  wordObj.transcript = "[ " + wordsTranscript[index] + " ]";

  wordsJSON.push(wordObj);
});

console.log(JSON.stringify(wordsJSON));
