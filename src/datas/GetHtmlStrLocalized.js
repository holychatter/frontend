import React from 'react'

const TranslationsEn = {
    "home": "Home",
    "categories": "Categories",
    "categoriesFolderName": "categories",
    "reasonsToBelieve": "Reasons to believe",
    "chatbot": "Chatbot",
    "readingsOfTheDay": "Readings of the day",
    "gospelOfTheDay": "Gospel of the day",
    "readings": "Readings",
    "bible": "Bible",
    "gospels": "Gospels",
    "sources": "Sources",
    "goToTheOtherLanguageVersion": "Version française",
    "about": "About",
    "aboutHolyChatterContent": "Holy Chatter is a site that aims to show the beauty and truth of the Christian religion thanks to a chatbot with a content verified by the webmaster.<br />This site was created in 2015 by young French Catholics wanting to share their received faith.<br />We hope it will improve your relationship with this God of love and it will give you the desire to meet Christians to continue the discussion!<br />Holy Chatter",
    "recipientsOfTheSite": "Recipients of the site",
    "readyToChat": "READY TO CHAT?",
    "christianMessage": "Christian message",
    "close": "Close",
    "relatedQuestions": "Related questions",
    "chatFromThisMessage": "Chat from this message",
    "biblicalReferences": "Biblical references",
    "referencesToTheCatechismOfTheCatholicChurch": "References to the Catechism of the Catholic Church",
    "catechismOfTheCatholicChurchNum": "Catechism of the Catholic Church n°",
    "reference": "Reference",
    "site": "Site",
    "videos": "Videos",
    "oldTestament": "Old testament",
    "newTestament": "New testament",
    "prologue": "Prologue",
    "theProfessionOfFaith": "The Profession of Faith",
    "theCelebrationOfChristianMistery": "The Celebration of the Christian Mystery",
    "lifeInChrist": "Life in Christ",
    "christianPrayer": "Christian Prayer",
    "plan": "Plan",
    "examples": "Examples",
    "encyclicLetterPatrisCorde": "Apostolic letter Patris corde",
    "encyclicalFratelliTutti": "Encyclical Fratelli Tutti",
    "encyclicalLaudatoSi": "Encyclical Laudato si'",
    "readThePopesWritings": "Read the Pope's writings",
    "theSocialDoctrineOfTheChurch": "The Social Doctrine of the Church"
};

const TranslationsFr = {
    "home": "Accueil",
    "categories": "Catégories",
    "categoriesFolderName": "categories",
    "reasonsToBelieve": "Raisons de croire",
    "chatbot": "Chatbot",
    "readingsOfTheDay": "Lectures du jour",
    "gospelOfTheDay": "Évangile du jour",
    "readings": "Lectures",
    "bible": "Bible",
    "gospels": "Évangiles",
    "sources": "Sources",
    "goToTheOtherLanguageVersion": "Switch to English",
    "about": "A propos",
    "aboutHolyChatterContent": "Holy Chatter est un site qui a pour but de montrer la beauté et véracité de la religion chrétienne grâce à un agent conversationnel ayant un contenu vérifié par le webmaster.<br />Ce site a été créé en 2015 par des jeunes catholiques français voulant partager la foi qu'ils ont reçu.<br />On espère que ça améliorera votre relation au Dieu d'amour et vous donnera le désir de rencontrer des chrétiens pour poursuivre la discussion !<br />Holy Chatter",
    "recipientsOfTheSite": "Destinataires du site",
    "readyToChat": "PRÊT À CHATTER ?",
    "christianMessage": "Message chrétien",
    "close": "Fermer",
    "relatedQuestions": "Questions liées",
    "chatFromThisMessage": "Discuter à partir de ce message",
    "biblicalReferences": "Références bibliques",
    "referencesToTheCatechismOfTheCatholicChurch": "Références au Catéchisme de l'Église catholique",
    "catechismOfTheCatholicChurchNum": "Catéchisme de l'Église catholique n°",
    "reference": "Référence",
    "site": "Site",
    "videos": "Vidéos",
    "oldTestament": "Ancien testament",
    "newTestament": "Nouveau testament",
    "prologue": "Prologue",
    "theProfessionOfFaith": "La profession de foi",
    "theCelebrationOfChristianMistery": "La célébration du mystère chrétien",
    "lifeInChrist": "La vie dans le Christ",
    "christianPrayer": "La prière chrétienne",
    "plan": "Plan",
    "examples": "Exemples",
    "encyclicLetterPatrisCorde": "Lettre apostolique Patris corde (Avec un Cœur de Père)",
    "encyclicalFratelliTutti": "Encyclique Fratelli Tutti",
    "encyclicalLaudatoSi": "Encyclique Laudato si'",
    "readThePopesWritings": "Lire les écrits du Pape",
    "theSocialDoctrineOfTheChurch": "La doctrine sociale de l'église"
};


function GetHtmlStrLocalized({ language, textId }) {
    if (language === "fr") {
        return <React.Fragment>{TranslationsFr[textId]}</React.Fragment>
    }
    return <React.Fragment>{TranslationsEn[textId]}</React.Fragment>
}



export default GetHtmlStrLocalized