
import '../assets/resources/custom/style/main-6.css'
import '../assets/resources/custom/style/bootstrap_hc.css'
import '../assets/resources/custom/style/dialog_max_height.css'
import '../assets/resources/custom/style/categories-1.css'
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import H1Title from '../components/title/H1Title'
import H1TitleBreadcrumb from '../components/title/H1TitleBreadcrumb'
import PageContent from '../components/util/PageContent'
import CategoriesBigButtons from '../components/bigButton/CategoriesBigButtons'
import Bubbles from '../components/chatbot/Bubbles'

function Categories({ language, setLanguage, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("");
	const [request, setRequest] = useState({ name: "", parentFolders: [], bigButtontDatas: [], chatMsgs: [] });
	let categoryName = "";

	if (location.pathname !== lastPath) {

		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		if (foldersArray.length > 3) {
			categoryName = foldersArray[3]
		}

		const wtUrl = backendUrl + "/categories_page_json?l=" + language + "&id=" + categoryName;
		console.log("Request url: " + wtUrl);
		const getBackendWithFetch = async () => {
			const response = await fetch(wtUrl);
			const jsonData = await response.json();
			setRequest(jsonData);
		};
		getBackendWithFetch();
	}

	return (
		<PageContent language={language} setLanguage={setLanguage}>

			{lastPath === "/" + language + "/categories" ? <H1Title>{request.name}</H1Title> : <H1TitleBreadcrumb language={language} parentFolders={request.parentFolders}>{request.name}</H1TitleBreadcrumb>}

			<br /><br />

			<CategoriesBigButtons categories={request.bigButtontDatas} />
			<Bubbles language={language} titleId="relatedQuestions" chatMsgs={request.chatMsgs} />

		</PageContent>
	)
}

export default Categories
