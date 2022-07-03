import '../assets/resources/custom/style/sources-0.css'
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import H1TitleBreadcrumb from '../components/title/H1TitleBreadcrumb'
import PageContent from '../components/util/PageContent'
import H2TitleId from '../components/title/H2TitleId'
import BigButtonsWithTextABottom from '../components/bigButton/BigButtonsWithTextABottom'
import GetStrLocalized from "../datas/GetStrLocalized"


function Source({ language, setLanguage, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")
	const [request, setRequest] = useState({ name: "", iconPath: "", description: "", videos: [], sites: [] })
	let sourceId = ""

	if (location.pathname !== lastPath) {

		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		if (foldersArray.length > 3) {
			sourceId = foldersArray[3]
		}

		const wtUrl = backendUrl + "/source_page_json?l=" + language + "&id=" + sourceId;
		console.log("Request url: " + wtUrl);
		const getBackendWithFetch = async () => {
			const response = await fetch(wtUrl);
			const jsonData = await response.json();
			setRequest(jsonData);
		};
		getBackendWithFetch();
	}

	const parentFolders = [
		{
			path: GetStrLocalized(language, "sourcesFolderName"),
			name: 'Sources'
		}
	]

	return (
		<PageContent language={language} setLanguage={setLanguage}>
			<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{request.name}</H1TitleBreadcrumb>
			<br /><br />




			<div style={{ width: '100%' }}>
				<table style={{ width: '100%' }}>
					<tbody>
						<tr>
							<td className="hc-message-viewer-width">
								<br />
								<div style={{ textAlign: 'center', paddingTop: '10px' }}><img src={request.iconPath} alt="Icon" height="150" width="150" /></div>
								<br /><br /><br />
								<div className="hc-content-text" style={{ paddingLeft: '30px', paddingRight: '15px', paddingBottom: '15px' }}>{request.description}</div>
								<br />
								<H2TitleId language={language} titleId={"site"} />
								<br />
								<div className="hc-content-text" style={{ paddingLeft: '30px', paddingRight: '15px', paddingBottom: '15px' }} >

									{
										request.sites !== "" &&
										request.sites.map((siteItem, siteIndex) => {
											return (
												<span key={'source-site-' + siteIndex} width="100px" style={{ textAlign: 'left' }}>
													{
														siteItem.image &&
														<a href={siteItem.url} style={{ textDecoration: 'none', outiline: 'none' }}>
															<div className="hc-center-background-image" width="100px" style={{ height: '500px', borderRadius: '10px', borderWidth: '0px', backgroundImage: 'url(/sites/' + siteItem.image + ')' }} >
															</div>
															<br />
															<div style={{ textAlign: 'left' }}><b className='hc-button-title-style'>{siteItem.title}</b></div>
														</a>
													}
													<span style={{ textAlign: 'left', color: '#22292f' }}><a href={siteItem.url}>{siteItem.url}</a></span>
												</span>
											)
										})
									}


								</div>
							</td>
							<td className="hc-long-screen hc-reference-viewer-width" style={{ paddingLeft: '30px', paddingRight: '15px', paddingBottom: '15px' }}>

								<div style={{ paddingTop: '13px' }}>
									<BigButtonsWithTextABottom videos={request.videos} />
								</div>

								<br />
							</td>
						</tr >
					</tbody >
				</table >
				<div className="hc-short-screen" style={{ textAlign: 'left', paddingLeft: '15px', paddingRight: '30px', paddingBottom: '15px' }} >
					<br />
					<H2TitleId language={language} titleId={"videos"} />

					<div style={{ paddingTop: '13px' }}>
						<BigButtonsWithTextABottom videos={request.videos} />
					</div>
				</div>
			</div >


		</PageContent >
	)
}

export default Source;