import React, { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom'
import H1Title from "../components/title/H1Title";
import H2Title from "../components/title/H2Title";
import PageContent from '../components/util/PageContent'
import ReadingContent from "../components/util/ReadingContent";



function ReadingsOfTheDay({ language, backendUrl, readingsType }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("");
	const [request, setRequest] = useState({ title: "", externalLinks: [], readings: [] });
	const navigate = useNavigate();
	const [typeOfReadingsFolder, setTypeOfReadingsFolder] = useState("");

	if (location.pathname !== lastPath) {
		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		if (foldersArray.length > 2)
			setTypeOfReadingsFolder(foldersArray[2]);
		var dateFolder = ""
		if (foldersArray.length > 3)
			dateFolder = foldersArray[3];
		const wtUrl = backendUrl + "/readings_of_the_day_content_json?l=" + language + "&r=" + readingsType + "&d=" + dateFolder;
		console.log("Request url: " + wtUrl);
		const getBackendWithFetch = async () => {
			const response = await fetch(wtUrl);
			const jsonData = await response.json();
			setRequest(jsonData);
		};
		getBackendWithFetch();
	}

	return (
		<PageContent>
			<H1Title>{request.title}</H1Title>
			<br /><br />

			<div className='hc-content-text' style={{ paddingLeft: '55px' }}>
				Changer la date : <input type="date" id='select-date-id' onChange={e => navigate("/fr/" + typeOfReadingsFolder + "/" + e.target.value)} />
				<br /><br />
				{
					request !== "" &&
					request.externalLinks.length > 0 &&
					<React.Fragment>
						{
							request.externalLinks.map((externalLink, externalLinkIndex) => {
								return (
									<React.Fragment key={"external-link-" + externalLinkIndex}>
										<a href={externalLink.url}>{externalLink.title}</a>
										<br />
									</React.Fragment>)
							})
						}
					</React.Fragment>
				}
			</div>

			<br /><br />
			{
				request !== "" &&
				request.readings.length > 0 &&
				<React.Fragment>
					{
						request.readings.map((reading, readingIndex) => {
							return (
								<React.Fragment key={"reading-" + readingIndex}>
									<H2Title>{reading.title}</H2Title>
									<br /><br />
									<div style={{ marginLeft: 40 }}>
										<div className='hc-content-text' style={{ paddingLeft: '15px' }}>
											<b dangerouslySetInnerHTML={{ __html: reading.subTitle }}></b>
											<br /><br />
											<a href={reading.referenceUrl}>{reading.reference}</a>
										</div>
										<br /><br />
										<ReadingContent language={language} type="bible" content={reading.content} />
									</div>
									<br />
								</React.Fragment>
							)
						})
					}
				</React.Fragment>
			}

		</PageContent>
	)
}

export default ReadingsOfTheDay;