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
import { useCookies } from 'react-cookie';
import Refs from '../components/util/Refs'
import SourceLink from '../components/source/SourceLink'

function Article({ language, setDocumentTitle, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")
	const [articleId, setArticleId] = useState("")
	const [request, setRequest] = useState({
		name: "", parentFolders: [], html: "", tags: "", references: [],
		fileType: "", source: { path: "", name: "", path: "", url: "" },
		duration: "", viewCountsAndUploadDate: "", chatbotId: "",
		rightRecommendationsHtmlForLongSreens: [], bibleRefs: [], cccRefs: []
	})
	const [cookies, setCookies] = useCookies(['messageIds', 'allRecommendationIds']);

	if (location.pathname !== lastPath) {
		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		if (foldersArray.length > 2) {
			const articleIdFromPath = foldersArray[2]
			setArticleId(articleIdFromPath)
			const wtUrl = backendUrl + "/article_page_json?l=" + language + "&id=" + articleIdFromPath + "&messageIds=" + cookies.messageIds + "&allRecommendationIds=" + cookies.allRecommendationIds;
			const getBackendWithFetch = async () => {
				const response = await fetch(wtUrl);
				const jsonData = await response.json();
				setRequest(jsonData);
				setDocumentTitle(jsonData.name + " - " + jsonData.sourceName);
				setCookies('messageIds', jsonData.messageIds, { path: '/' + language });
				setCookies('allRecommendationIds', jsonData.allRecommendationIds, { path: '/' + language });
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
		<PageContent>

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
											request.fileType !== "html" &&
											<br />
										}
										<SourceLink source={request.source} />
										{
											request.fileType !== "html" &&
											<br />
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


									<div className='hc-long-screen hc-small-margin' style={{ paddingLeft: 15, paddingRight: 5 }}>
										{
											request.rightRecommendationsHtmlForLongSreens !== "" &&
											request.rightRecommendationsHtmlForLongSreens.map((item, index) => {
												return (
													<React.Fragment key={"right-recommendations-" + index} >
														<div className="hc-inline-flex" >
															<BigButtonWithTextAtRight allowPreview={false} language={language} item={item} />

														</div>
														<br />
														<br />
														<br />
													</React.Fragment>
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
