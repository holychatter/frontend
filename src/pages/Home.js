import '../assets/resources/custom/style/sources-0.css'
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import PageContent from '../components/util/PageContent'
import H1TitleId from '../components/title/H1TitleId'
import CategoriesBigButtons from '../components/bigButton/CategoriesBigButtons'
import H2TitleId from '../components/title/H2TitleId'
import Bubbles from '../components/chatbot/Bubbles'
import { useCookies } from 'react-cookie'



function Home({ language, setLanguage, backendUrl }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")
	const [request, setRequest] = useState({ recommendations: [], categories: [], recentVideos: [], recentChatMessages: [] })
	const [cookies] = useCookies(['messageIds', 'allRecommendationIds']);

	if (location.pathname !== lastPath) {
		setLastPath(location.pathname);
		const wtUrl = backendUrl + "/home_content_json?l=" + language + "&messageIds=" + cookies.messageIds + "&allRecommendationIds=" + cookies.allRecommendationIds;
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
			<H1TitleId language={language} titleId="helloTogetherLetsDiscoverTheChristianFaith" />
			<br /><br />

			<CategoriesBigButtons categories={request.recommendations} />
			<br />

			<H2TitleId language={language} titleId="categories" />
			<CategoriesBigButtons categories={request.categories} />
			<br />

			<H2TitleId language={language} titleId="novelties" />
			<CategoriesBigButtons beginOfKey="recent-videos-" categories={request.recentVideos} />
			<br />

			<Bubbles language={language} titleId="chatNovelties" chatMsgs={request.recentChatMessages} />

		</PageContent >
	)
}

export default Home;