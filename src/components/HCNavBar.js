import '../assets/resources/custom/style/main-6.css'
import React from 'react'
import { Link } from "react-router-dom"
import image_house from '../assets/resources/custom/navbar_icons/house.png'
import image_chatbot from '../assets/resources/custom/navbar_icons/chatbot.jpg'
import image_bible from '../assets/resources/custom/navbar_icons/bible.jpg'
import image_sources from '../assets/resources/custom/navbar_icons/sources.jpg'
import image_englishFlag from '../assets/resources/custom/navbar_icons/england.png'
import image_frenchFlag from '../assets/resources/custom/navbar_icons/france.png'
import image_profil from '../assets/resources/custom/navbar_icons/profil.png'
import GetHtmlStrLocalized from '../datas/GetHtmlStrLocalized'
import GetStrLocalized from '../datas/GetStrLocalized'
import OpenNav from './nav/OpenNav'
import CloseNav from './nav/CloseNav'


function HCNavBar({ language, setLanguage }) {

	const otherLanguage = (language === "fr") ? "en" : "fr";
	const image_otherLanguageFlag = (language === "fr") ? image_englishFlag : image_frenchFlag;

	return (
		<React.Fragment>
			<div id='hcSidenavId' className='hc-sidenav' onMouseOver={OpenNav} onMouseOut={CloseNav}>
				<Link to={"/" + language}><img style={{marginLeft: 20}} width='20px' src={image_house} alt="home" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="home" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "categoriesFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_house} alt="home" /><span className='hc-sidebar-text hc-sidebar-text-sub'><GetHtmlStrLocalized language={language} textId="categories" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "categoriesFolderName") + "/" + GetStrLocalized(language, "reasonsToBelieveFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_house} alt="home" /><span className='hc-sidebar-text hc-sidebar-text-sub-sub'><GetHtmlStrLocalized language={language} textId="reasonsToBelieve" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "chatbotFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_chatbot} alt="chatbot" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="chatbot" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "readingsFolderName") + "/" + GetStrLocalized(language, "bibleFolderName") + "/" + GetStrLocalized(language, "gospelsFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_bible} alt="Bible" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="gospels" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "readingsOfTheDayFolderName") + "/" + GetStrLocalized(language, "gospelFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_bible} alt="Bible" /><span className='hc-sidebar-text hc-sidebar-text-sub'><GetHtmlStrLocalized language={language} textId="gospelOfTheDay" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "readingsFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_bible} alt="Bible" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="readings" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "readingsOfTheDayFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_bible} alt="Bible" /><span className='hc-sidebar-text hc-sidebar-text-sub'><GetHtmlStrLocalized language={language} textId="readingsOfTheDay" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "sourcesFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_sources} alt="sources" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="sources" /></span></Link>
				<Link to={"/" + otherLanguage} onClick={() => setLanguage(otherLanguage)}><img style={{marginLeft: 20}} width='20px' src={image_otherLanguageFlag} alt="flag" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="goToTheOtherLanguageVersion" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "aboutFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_profil} alt="profil" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="about" /></span></Link>
				<br/><br/><br/><br/><br/><br/>
			</div>
			<br/>
		</React.Fragment>
	)
}

export default HCNavBar
