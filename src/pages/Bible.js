import '../assets/resources/custom/style/chapters.css'
import React, { useState } from "react"
import GetStrLocalized from '../datas/GetStrLocalized'
import H1TitleBreadcrumb from '../components/title/H1TitleBreadcrumb'
import PageContent from '../components/util/PageContent'
import BigButtonWithTextABottom from "../components/bigButton/BigButtonWithTextABottom"
import YouTubePlayer from '../components/YouTubePlayer'
import { useLocation } from 'react-router-dom'
import Categories from '../components/bigButton/Categories'
import Chapters from '../components/bigButton/Chapters'
import ReadingContent from '../components/util/ReadingContent'


function Bible({ language, setLanguage, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")

	const TypeOfRequest_NONE = 0
	const TypeOfRequest_OLD_TESTAMENT = 1
	const TypeOfRequest_NEW_TESTAMENT = 2
	const TypeOfRequest_BIBLE_CONTENT = 3
	const [typeOfPage, setTypeOfPage] = useState(TypeOfRequest_NONE)

	const [parentFolders, setParentFolders] = useState([])

	const [testamentRequest, setTestamentRequest] = useState({ categories: [] })
	const [contentRequest, setContentRequest] = useState({ breadcrumb: [], title: "", typeOfPage: "", categories: [], content: [] })


	const readingPartOfBreadcrumb = {
		path: GetStrLocalized(language, "readingsFolderName"),
		name: GetStrLocalized(language, "readings")
	}
	const biblePartOfBreadcrumb = {
		path: GetStrLocalized(language, "readingsFolderName") + "/" + GetStrLocalized(language, "bibleFolderName"),
		name: GetStrLocalized(language, "bible")
	}

	if (location.pathname !== lastPath) {
		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		var typeOfPageLocal = TypeOfRequest_NONE
		let bibleSubFolder = ""
		if (foldersArray.length > 4) {
			bibleSubFolder = foldersArray[4]
			if (bibleSubFolder === GetStrLocalized(language, "oldTestamentFolderName")) {
				typeOfPageLocal = TypeOfRequest_OLD_TESTAMENT
			} else if (bibleSubFolder === GetStrLocalized(language, "newTestamentFolderName")) {
				typeOfPageLocal = TypeOfRequest_NEW_TESTAMENT
			} else {
				typeOfPageLocal = TypeOfRequest_BIBLE_CONTENT
			}
		}

		setTypeOfPage(typeOfPageLocal)
		if (typeOfPageLocal === TypeOfRequest_OLD_TESTAMENT ||
			typeOfPageLocal === TypeOfRequest_NEW_TESTAMENT) {
			setParentFolders([
				readingPartOfBreadcrumb,
				biblePartOfBreadcrumb
			])
			const wtUrl = backendUrl + "/testament_to_categories_json?l=" + language + "&tt=" +
				(typeOfPageLocal === TypeOfRequest_OLD_TESTAMENT ? "o" : "n");
			console.log("Request url: " + wtUrl);
			const getBackendTestamentWithFetch = async () => {
				const response = await fetch(wtUrl);
				const jsonData = await response.json();
				setTestamentRequest(jsonData);
			};
			getBackendTestamentWithFetch();
		} else if (typeOfPageLocal === TypeOfRequest_BIBLE_CONTENT) {
			const wtUrl = backendUrl + "/bible_content_json?l=" + language + "&ref=" + bibleSubFolder;
			console.log("Request url: " + wtUrl);
			const getBackendCategoriesWithFetch = async () => {
				const response = await fetch(wtUrl);
				const jsonData = await response.json();
				setContentRequest(jsonData);
				setParentFolders([
					readingPartOfBreadcrumb,
					biblePartOfBreadcrumb,
					...jsonData.breadcrumb
				])
			};
			getBackendCategoriesWithFetch();
		} else {
			setParentFolders([readingPartOfBreadcrumb]);
		}
	}

	return (
		<PageContent language={language} setLanguage={setLanguage}>

			{
				typeOfPage === TypeOfRequest_NONE &&
				<React.Fragment>
					<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{GetStrLocalized(language, "bible")}</H1TitleBreadcrumb>
					<br /><br />

					<div className='hc-text-align-center'>
						<BigButtonWithTextABottom link={GetStrLocalized(language, "oldTestamentFolderName")} image="/buttons/old_testament.jpg" duration="" title={GetStrLocalized(language, "oldTestament")} tags="" sourceImage="" sourceName="" beginOfClassName="hc-big-button-normal" />
						<BigButtonWithTextABottom link={GetStrLocalized(language, "newTestamentFolderName")} image="/buttons/new_testament.jpg" duration="" title={GetStrLocalized(language, "newTestament")} tags="" sourceImage="" sourceName="" beginOfClassName="hc-big-button-normal" />

						{
							language === "fr" &&
							<span>
								<br />
								<span className='hc-content-text' >
									Aide pour la lecture : <a href="/resources/custom/documents/Lire la bible en 1 an.pdf">Lire la bible en 1 an</a>
								</span>
							</span>
						}
						<br /><br />
						<YouTubePlayer videoId={language === "fr" ? "pYYIYRhlVoI" : "ak06MSETeo4"} />
						<br /><br />

					</div>
				</React.Fragment>
			}

			{
				(typeOfPage === TypeOfRequest_OLD_TESTAMENT || typeOfPage === TypeOfRequest_NEW_TESTAMENT) &&
				<React.Fragment>
					<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{GetStrLocalized(language, typeOfPage === TypeOfRequest_OLD_TESTAMENT ? "oldTestament" : "newTestament")}</H1TitleBreadcrumb>
					<br /><br />

					<Categories categories={testamentRequest.categories} />
				</React.Fragment>
			}


			{
				typeOfPage === TypeOfRequest_BIBLE_CONTENT &&
				<React.Fragment>
					<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{contentRequest.title}</H1TitleBreadcrumb>
					<br /><br />

					{contentRequest.typeOfPage === "book" ?
						<Chapters chapters={contentRequest.categories} />
						:
						<Categories categories={contentRequest.categories} />
					}

					{contentRequest.typeOfPage === "chapter" &&
						<React.Fragment>
							<br />
							<div style={{ marginLeft: 40 }}>
								<ReadingContent language={language} type="bible" content={contentRequest.content} />
							</div>
						</React.Fragment>
					}

				</React.Fragment>
			}


		</PageContent>
	)
}

export default Bible;