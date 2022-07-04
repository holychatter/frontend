import React, { useState } from "react"
import GetStrLocalized from '../datas/GetStrLocalized'
import H1TitleBreadcrumb from '../components/title/H1TitleBreadcrumb'
import PageContent from '../components/util/PageContent'
import { useLocation } from 'react-router-dom'
import Categories from '../components/bigButton/Categories'
import ReadingContent from "../components/util/ReadingContent"



function CatechismOfTheCatholicChurch({ language, setLanguage, backendUrl }) {

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
		console.log("Request url: " + wtUrl);
		const getBackendWithFetch = async () => {
			const response = await fetch(wtUrl);
			const jsonData = await response.json();
			setRequest(jsonData);
			setParentFolders([
				readingPartOfBreadcrumb,
				...jsonData.breadcrumb
			])
		};
		getBackendWithFetch();
	}

	return (
		<PageContent language={language} setLanguage={setLanguage}>
			<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{request.title}</H1TitleBreadcrumb>
			<br /><br />
			<Categories categories={request.categories} />
			<br /><br />

			<div style={{ marginLeft: 40 }}>
				<ReadingContent language={language} type="bible" content={request.content} />
			</div>
		</PageContent>
	)
}

export default CatechismOfTheCatholicChurch;