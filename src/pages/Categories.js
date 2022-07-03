
import '../assets/resources/custom/style/main-6.css'
import '../assets/resources/custom/style/bootstrap_hc.css'
import '../assets/resources/custom/style/dialog_max_height.css'
import '../assets/resources/custom/style/categories-1.css'
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import H1Title from '../components/title/H1Title'
import H1TitleBreadcrumb from '../components/title/H1TitleBreadcrumb'
import PageContent from '../components/util/PageContent'
import BigButtonWithTextABottom from '../components/bigButton/BigButtonWithTextABottom'
import H2TitleId from '../components/title/H2TitleId'
import Bubble from '../components/chatbot/Bubble'

function Categories({ language, setLanguage, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")
	const [request, setRequest] = useState({ name: "", parentFolders: [], bigButtontDatas: [], chatMsgs: [] })
	let categoryName = ""

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

			<div className='hc-categories-left-margin'>
				{
					request.bigButtontDatas !== "" &&
					request.bigButtontDatas.map((item, index) => {
						return <BigButtonWithTextABottom key={index} link={item.link} image={item.image} duration={item.duration} title={item.title} tags={item.tags} sourceImage={item.sourceImage} sourceName={item.sourceName} beginOfClassName="hc-big-button-normal" />
					})
				}
			</div>


			{
				request.chatMsgs !== "" &&
				request.chatMsgs.length > 0 &&
				<React.Fragment>
					<br />
					<H2TitleId language={language} titleId="relatedQuestions" />
					<div className='hc-categories-left-margin'>
						{
							request.chatMsgs.map((item, index) => {
								return (
									<Link key={"chat-msg-" + item.id + "-" + index} className='hc-move-up-animation' style={{ marginTop: 15, marginRight: 15, marginBottom: 15, display: 'inline-block', textDecoration: 'none' }} to='/fr/preparation-a-la-confirmation'>
										<Bubble>{item.mainTrigger}</Bubble>
									</Link>
								)
							})
						}
					</div>
				</React.Fragment>
			}



		</PageContent>
	)
}

export default Categories
