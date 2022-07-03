import '../assets/resources/custom/style/main-6.css'
import '../assets/resources/custom/style/bootstrap_hc.css'
import '../assets/resources/custom/style/dialog_max_height.css'
import '../assets/resources/custom/style/categories-1.css'
import '../assets/resources/custom/style/video_size-0.css'
import React, { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import H1Title from '../components/title/H1Title'
import H1TitleBreadcrumb from '../components/title/H1TitleBreadcrumb'
import PageContent from '../components/util/PageContent'
import GetHtmlStrLocalized from '../datas/GetHtmlStrLocalized'
import BigButtonWithTextAtRight from '../components/bigButton/BigButtonWithTextAtRight'

import Refs from '../components/util/Refs'

function Article({ language, setLanguage, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")
	const [articleId, setArticleId] = useState("")
	const [request, setRequest] = useState({
		name: "", parentFolders: [], html: "", tags: "", references: [],
		fileType: "", sourceIconPath: "", sourceName: "", sourcePath: "", sourceUrl: "",
		duration: "", viewCountsAndUploadDate: "", chatbotId: "",
		rightRecommendationsHtmlForLongSreens: [], bibleRefs: [], cccRefs: []
	})

	if (location.pathname !== lastPath) {

		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		if (foldersArray.length > 2) {
			const articleIdFromPath = foldersArray[2]
			setArticleId(articleIdFromPath)
			const wtUrl = backendUrl + "/article_page_json?l=" + language + "&id=" + articleIdFromPath;
			console.log("Request url: " + wtUrl);
			const getBackendWithFetch = async () => {
				const response = await fetch(wtUrl);
				const jsonData = await response.json();
				setRequest(jsonData);
			};
			getBackendWithFetch();

		}
	}

	function addAutoStart(string) {
		const relZero = 'rel=0'
		const relZeroIndex = string.indexOf(relZero);
		if (relZeroIndex !== -1) {
			return string.substring(0, relZeroIndex + relZero.length) + "&autoplay=1" +
				string.substring(relZeroIndex + relZero.length, string.length);
		}
		return string
	}

	return (
		<PageContent language={language} setLanguage={setLanguage}>

			{lastPath === "/" + language + "/categories" ? <H1Title>{request.name}</H1Title> : <H1TitleBreadcrumb language={language} parentFolders={request.parentFolders}>{request.name}</H1TitleBreadcrumb>}

			<div style={{ marginLeft: 20, marginRight: 20 }}>
				<table style={{ width: '100%' }}>
					<tbody>
						<tr>
							<td className="hc-message-viewer-width">
								<div style={{ paddingLeft: 5, paddingRight: 15, paddingTop: 10 }}>
									<span dangerouslySetInnerHTML={{ __html: addAutoStart(request.html) }} />
									<p>{request.tags}</p>

									<p>
										{
											request.references !== "" &&
											request.references.length > 0 &&
											<React.Fragment>
												{
													request.references.map((item, index) => {
														return (
															<React.Fragment key={"references-" + item.url + "-" + index}>
																{
																	item.iconPath !== "" &&
																	<img src={item.iconPath} alt="icon of the reference" className="hc-source-icon" />
																}
																<a href={item.url} >{item.url}</a>
																<br />
															</React.Fragment>
														)
													})
												}
											</React.Fragment>
										}

										{
											request.sourceName !== "" &&
											<React.Fragment>
												{
													request.fileType !== "html" &&
													<br />
												}
												<img src={request.sourceIconPath} alt="icon of the source" className="hc-source-icon" />
												<Link to={request.sourcePath} >{request.sourceName}</Link>
												{
													request.fileType !== "html" &&
													<br />
												}
												{
													request.sourceUrl !== "" &&
													<React.Fragment>&nbsp;&nbsp;&nbsp;(<a href={request.sourceUrl}>{request.sourceUrl}</a>)</React.Fragment>
												}
											</React.Fragment>
										}
									</p>
									<br />
									{request.duration}
									<br />
									{request.viewCountsAndUploadDate}
									<br />
									<Link className='hc-text-align-center' to={"/" + language + "/chatbot/" + request.chatbotId + "?messageId=" + articleId}>
										<GetHtmlStrLocalized language={language} textId="chatFromThisMessage" />
									</Link>
									<br />
								</div>
							</td>
							<td className="hc-reference-viewer-width">
								<span id="right-recommendations-for-long-screens">


									<div className='hc-long-screen' style={{ paddingLeft: 15, paddingRight: 5 }}>
										{
											request.rightRecommendationsHtmlForLongSreens !== "" &&
											request.rightRecommendationsHtmlForLongSreens.map((item, index) => {
												return (
													<div key={index} className="hc-inline-flex hc-small-margin" >
														<BigButtonWithTextAtRight allowPreview={false} language={language} item={item} />
														<br />
													</div>
												)
											})
										}
									</div>



								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<br />
			<br />
			<Refs language={language} type="bible" refs={request.bibleRefs} />
			<br />
			<Refs language={language} type="ccc" refs={request.cccRefs} />
		</PageContent >
	)
}

export default Article
