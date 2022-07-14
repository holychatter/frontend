import React from 'react'
import { Link } from "react-router-dom"
import image_house from '../../assets/resources/custom/navbar_icons/house.png'
import image_chatbot from '../../assets/resources/custom/navbar_icons/chatbot.png'
import image_bible from '../../assets/resources/custom/navbar_icons/bible.png'
import image_sources from '../../assets/resources/custom/navbar_icons/sources.png'
import image_englishFlag from '../../assets/resources/custom/navbar_icons/england.png'
import image_frenchFlag from '../../assets/resources/custom/navbar_icons/france.png'
import image_profil from '../../assets/resources/custom/navbar_icons/profil.png'
import image_manage from '../../assets/resources/custom/navbar_icons/manage.png'
import GetHtmlStrLocalized from '../../datas/GetHtmlStrLocalized'
import GetStrLocalized from '../../datas/GetStrLocalized'
import OpenNav from './OpenNav'
import CloseNav from './CloseNav'


function HCNavBar({ language, setLanguage, location, backendUrl }) {

	const otherLanguage = (language === "fr") ? "en" : "fr";
	const image_otherLanguageFlag = (language === "fr") ? image_englishFlag : image_frenchFlag;

	return (
		<React.Fragment>
			<div id='hcSidenavId' className='hc-sidenav' onMouseOver={OpenNav} onMouseOut={CloseNav}>
				<Link to={"/" + language} onClick={CloseNav}><img style={{marginLeft: 20}} width='20px' src={image_house} alt="home" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="home" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "categoriesFolderName")} onClick={CloseNav}><img style={{marginLeft: 20}} width='20px' src={image_house} alt="home" /><span className='hc-sidebar-text hc-sidebar-text-sub'><GetHtmlStrLocalized language={language} textId="categories" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "categoriesFolderName") + "/" + GetStrLocalized(language, "reasonsToBelieveFolderName")} onClick={CloseNav}><img style={{marginLeft: 20}} width='20px' src={image_house} alt="home" /><span className='hc-sidebar-text hc-sidebar-text-sub-sub'><GetHtmlStrLocalized language={language} textId="reasonsToBelieve" /></span></Link>
				<a href={backendUrl + "/" + language + "/" + GetStrLocalized(language, "chatbotFolderName")}><img style={{marginLeft: 20}} width='20px' src={image_chatbot} alt="chatbot" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="chatbot" /></span></a>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "readingsFolderName") + "/" + GetStrLocalized(language, "bibleFolderName") + "/" + GetStrLocalized(language, "gospelsFolderName")} onClick={CloseNav}><img style={{marginLeft: 20}} width='20px' src={image_bible} alt="Bible" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="gospels" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "gospelOfTheDayFolderName")} onClick={CloseNav}><img style={{marginLeft: 20}} width='20px' src={image_bible} alt="Bible" /><span className='hc-sidebar-text hc-sidebar-text-sub'><GetHtmlStrLocalized language={language} textId="gospelOfTheDay" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "readingsFolderName")} onClick={CloseNav}><img style={{marginLeft: 20}} width='20px' src={image_bible} alt="Bible" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="readings" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "readingsOfTheDayFolderName")} onClick={CloseNav}><img style={{marginLeft: 20}} width='20px' src={image_bible} alt="Bible" /><span className='hc-sidebar-text hc-sidebar-text-sub'><GetHtmlStrLocalized language={language} textId="readingsOfTheDay" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "sourcesFolderName")} onClick={CloseNav}><img style={{marginLeft: 20}} width='20px' src={image_sources} alt="sources" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="sources" /></span></Link>
				<Link to={"/" + otherLanguage} onClick={() => { CloseNav(); setLanguage(otherLanguage); }}><img style={{marginLeft: 20}} width='20px' src={image_otherLanguageFlag} alt="flag" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="goToTheOtherLanguageVersion" /></span></Link>
				<Link to={"/" + language + "/" + GetStrLocalized(language, "aboutFolderName")} onClick={CloseNav}><img style={{marginLeft: 20}} width='20px' src={image_profil} alt="profil" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="about" /></span></Link>
				<a href={backendUrl + '/edit' + location.pathname}><img style={{marginLeft: 20}} width='20px' src={image_manage} alt="profil" /><span className='hc-sidebar-text'><GetHtmlStrLocalized language={language} textId="manage" /></span></a>
				<br/><br/><br/><br/><br/><br/>
			</div>
			<br/>
		</React.Fragment>
	)
}

export default HCNavBar
