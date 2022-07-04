import React, { useState } from "react"
import { useLocation } from 'react-router-dom'
import H1Title from "../components/title/H1Title";
import H1TitleId from "../components/title/H1TitleId"
import H2Title from "../components/title/H2Title";
import PageContent from '../components/util/PageContent'



function ReadingsOfTheDay({ language, setLanguage, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("");
	const [request, setRequest] = useState({ readings: [] });

	if (location.pathname !== lastPath) {
		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		var dateFolder = ""
		if (foldersArray.length > 4) {
			dateFolder = foldersArray[4];
		}
		const wtUrl = backendUrl + "/readings_of_the_day_content_json?l=" + language + "&d=" + dateFolder;
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
			<H1Title>{request.title}</H1Title>
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
									<br/>
									<br/>
									<br/>
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