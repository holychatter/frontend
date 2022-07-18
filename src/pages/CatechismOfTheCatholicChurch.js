import React, { useState } from "react"
import GetStrLocalized from '../datas/GetStrLocalized'
import H1TitleBreadcrumb from '../components/title/H1TitleBreadcrumb'
import PageContent from '../components/util/PageContent'
import { useLocation } from 'react-router-dom'
import ReadingContent from "../components/util/ReadingContent"
import CategoriesBigButtons from "../components/bigButton/CategoriesBigButtons"



function CatechismOfTheCatholicChurch({ language, setDocumentTitle, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")
	const [parentFolders, setParentFolders] = useState([])
	const [request, setRequest] = useState({ breadcrumb: [], title: "", categories: [], content: [] })

	const readingPartOfBreadcrumb = {
		path: GetStrLocalized(language, "readingsFolderName"),
		name: GetStrLocalized(language, "readings")
	}

	if (location.pathname !== lastPath) {
		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		var cccSubFolder = ""
		if (foldersArray.length > 4) {
			cccSubFolder = foldersArray[4];
		}
		const wtUrl = backendUrl + "/ccc_content_json?l=" + language + "&t=" + cccSubFolder;
		const getBackendWithFetch = async () => {
			const response = await fetch(wtUrl);
			const jsonData = await response.json();
			setRequest(jsonData);
			if (cccSubFolder === "")
				setDocumentTitle(GetStrLocalized(language, "catechismOfTheCatholicChurch") + " - Holy Chatter");
			else
				setDocumentTitle(jsonData.title + " - " + GetStrLocalized(language, "catechismOfTheCatholicChurch"));
			setParentFolders([
				readingPartOfBreadcrumb,
				...jsonData.breadcrumb
			])
		};
		getBackendWithFetch();
	}

	return (
		<PageContent>
			<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{request.title}</H1TitleBreadcrumb>
			<br /><br />
			<CategoriesBigButtons categories={request.categories} />
			<br /><br />

			<div style={{ marginLeft: 40 }}>
				<ReadingContent language={language} type="bible" content={request.content} />
			</div>
		</PageContent>
	)
}

export default CatechismOfTheCatholicChurch;