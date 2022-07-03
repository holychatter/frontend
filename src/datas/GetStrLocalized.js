
const TranslationsEn = {
    "categoriesFolderName": "categories",
    "reasonsToBelieveFolderName" : "reasons-to-believe",
    "chatbotFolderName": "chatbot",
    "readingsOfTheDayFolderName": "lectures-du-jour",
    "gospelFolderName": "gospel",
    "readingsFolderName": "readings",
    "bibleFolderName": "bible",
    "oldTestamentFolderName": "old-testament",
    "newTestamentFolderName": "new-testament",
    "catechismOfTheCatholicChurchFolderName": "catechism-of-the-catholic-church",
    "gospelsFolderName": "gospels",
    "sourcesFolderName": "sources",
    "aboutFolderName": "about",
    "searchFolderName": "search",
    "christianMessageFolderName": "christian-message",
    "prologueFolderName": "prologue",
    "theProfessionOfFaithFolderName": "the-profession-of-faith",
    "theCelebrationOfChristianMisteryFolderName": "the-celebration-of-the-christian-mystery",
    "lifeInChristFolderName": "life-in-christ",
    "christianPrayerFolderName": "christian-prayer",
    "textsOfThePopeFolderName": "texts-of-the-pope",
    "search": "Search",
    "close": "Close",
    "verse": "Verse",
    "verses": "Verses",
    "listen": "Listen",
    "stop": "Stop",
    "bible": "Bible",
    "catechismOfTheCatholicChurch": "Catechism of the Catholic Church",
    "textsOfThePope": "Texts of the pope",
    "theSocialDoctrineOfTheChurchUrl": "http://www.vatican.va/roman_curia/pontifical_councils/justpeace/documents/rc_pc_justpeace_doc_20060526_compendio-dott-soc_en.html",
    "readings": "Readings",
    "oldTestament": "Old testament",
    "newTestament": "New testament"
};

const TranslationsFr = {
    "categoriesFolderName": "categories",
    "reasonsToBelieveFolderName" : "raisons-de-croire",
    "chatbotFolderName": "chatbot",
    "readingsOfTheDayFolderName": "readings-of-the-day",
    "gospelFolderName": "evangile",
    "readingsFolderName": "lectures",
    "bibleFolderName": "bible",
    "oldTestamentFolderName": "ancien-testament",
    "newTestamentFolderName": "nouveau-testament",
    "catechismOfTheCatholicChurchFolderName": "catechisme-de-l-eglise-catholique",
    "gospelsFolderName": "evangiles",
    "sourcesFolderName": "sources",
    "aboutFolderName": "a-propos",
    "searchFolderName": "rechercher",
    "christianMessageFolderName": "message-chretien",
    "textsOfThePopeFolderName": "textes-du-pape",
    "prologueFolderName": "prologue",
    "theProfessionOfFaithFolderName": "la-profession-de-foi",
    "theCelebrationOfChristianMisteryFolderName": "la-celebration-du-mystere-chretien",
    "lifeInChristFolderName": "la-vie-dans-le-christ",
    "christianPrayerFolderName": "la-priere-chretienne",
    "search": "Rechercher",
    "close": "Fermer",
    "verse": "Verset",
    "verses": "Versets",
    "listen": "Écouter",
    "stop": "Arrêter",
    "bible": "Bible",
    "catechismOfTheCatholicChurch": "Catéchisme de l'Église catholique",
    "textsOfThePope": "Textes du pape",
    "theSocialDoctrineOfTheChurchUrl": "http://www.vatican.va/roman_curia/pontifical_councils/justpeace/documents/rc_pc_justpeace_doc_20060526_compendio-dott-soc_fr.html",
    "readings": "Lectures",
    "oldTestament": "Ancien testament",
    "newTestament": "Nouveau testament"
};


function GetStrLocalized(language, textId) {
    if (language === "fr") {
        return TranslationsFr[textId]
    }
    return TranslationsEn[textId]
}


export default GetStrLocalized