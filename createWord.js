const wordsStrEn =
  "I've got a headache/ She had a stomachache yesterday/ Have you got toothache?/I had a filthy earache/ Are you hurt anywhere?/ You might catch a cold./ An hour later her temperature was up again./ I was going to have to call a doctor./ Do you have cough medicine?/ I also have a very sore throat./You got a runny nose./ The doctor told me I had the flu./It could be bipolar disease./ Morning sickness?/ He began sneezing again.";

const wordsStrRu =
  "У меня болит голова/ Вчера у нее болел живот/ У тебя болят зубы?/У меня ужасно болело ухо/ У тебя где-нибудь болит?/ Ты можешь простудиться. / Через час у нее снова поднялась температура./ Я собирался вызвать врача./ У вас есть лекарство от кашля?/ У меня также очень болит горло./У тебя насморк./ Врач сказал мне, что у меня грипп./ Это может быть биполярное заболевание./ Утренняя тошнота?/ Он снова начал чихать.";

const wordsStrTranscript =
  "aɪv gɑt ə ˈhɛˌdeɪk/ ʃi həd ə stʌməkeɪk ˈjɛstərˌdeɪ/ həv jʊ gɑt ˈtuːθeɪk?/ aɪ həd ə ˈfɪlθi ˈɪəreɪk/ ɑr jʊ hɜrt ˈɛniˌwɛr?/ jʊ maɪt kæʧ ə koʊld./ ən ˈaʊər ˈleɪtər hər ˈtɛmprəʧər wəz ʌp əˈgɛn./ aɪ wəz ˈgoʊɪŋ tə həv tə kɔl ə ˈdɑktər./ dʊ jʊ həv kɑf ˈmɛdəsən?/ aɪ ˈɔlsoʊ həv ə ˈvɛri sɔr θroʊt./jʊ gɑt ə ˈrʌni noʊz./ ðə ˈdɑktər toʊld mi aɪ həd ðə flu./ɪt kəd bi baɪˈpoʊlər dɪˈziz./ ˈmɔrnɪŋ ˈsɪknəs?/ hi bɪˈgæn ˈsnizɪŋ əˈgɛn.";

const wordsEn = wordsStrEn.split("/");

const wordsTranscript = wordsStrTranscript.split("/");

const wordsRu = wordsStrRu.split("/");

const wordsJSON = [];

const dirAudio = "./audios/words2/";

wordsEn.forEach((word, index) => {
  const wordObj = {};

  wordObj.ru = wordsRu[index].trim();
  wordObj.en = word.trim();
  wordObj.addWord = "";
  wordObj.audioEnUrl =
    dirAudio +
    word
      .trim()
      .toLowerCase()
      .replace(/[\s.,%?]/g, "_")
      .replace("'", "-") +
    ".mp3";
  wordObj.transcript = "[ " + wordsTranscript[index].trim() + " ]";

  wordsJSON.push(wordObj);
});

console.log(JSON.stringify(wordsJSON));
