import '../assets/resources/custom/style/sources-0.css'
import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import PageContent from '../components/util/PageContent'
import H1TitleId from '../components/title/H1TitleId'
import BigButtonWithTextAtRight from '../components/bigButton/BigButtonWithTextAtRight'
import GetStrLocalized from '../datas/GetStrLocalized'
import SearchInput from '../components/banner/SearchInput'



function Search({ language, setDocumentTitle, backendUrl, searchValue, setSearchValue }) {

	const location = useLocation();
	const [lastPath, setLastPath] = useState("")
	const [request, setRequest] = useState({ videos: [] })
	let query = ""

	if (location.pathname !== lastPath) {
		setLastPath(location.pathname);
		const foldersArray = location.pathname.split('/');
		if (foldersArray.length > 3) {
			query = foldersArray[3]

			setDocumentTitle(query + " - " + GetStrLocalized(language, "holyChatterSearch"));
			const wtUrl = backendUrl + "/search_content_json?l=" + language + "&q=" + query;
			console.log("Request url: " + wtUrl);
			const getBackendWithFetch = async () => {
				const response = await fetch(wtUrl);
				const jsonData = await response.json();
				setSearchValue(query);
				setRequest(jsonData);
			};
			getBackendWithFetch();
		} else {
			setDocumentTitle(GetStrLocalized(language, "holyChatterSearch"));
			setSearchValue("");
			console.log("setSearchValue cleared")
		}
	}


	return (
		<PageContent>
			<H1TitleId language={language} titleId="search" />
			<br />

			<div className="hc-very-short-screen">
				<SearchInput language={language} searchValue={searchValue} />
				<br />
			</div>
			<br />


			<div className="hc-search-result-paddings">
				{
					request.videos !== "" &&
					request.videos.map((item, index) => {
						return (
							<React.Fragment key={"video-search-result-" + index}>
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

		</PageContent >
	)
}

export default Search;