import React from "react"
import H1TitleBreadcrumb from "../components/title/H1TitleBreadcrumb"
import H2TitleId from "../components/title/H2TitleId"
import PageContent from '../components/util/PageContent'
import YouTubePlayer from "../components/YouTubePlayer"
import GetInnerHtmlStrLocalized from "../datas/GetInnerHtmlStrLocalized"
import GetStrLocalized from "../datas/GetStrLocalized"


function TextsOfThePope({ language, setLanguage }) {

	const parentFolders = [
		{
			path: GetStrLocalized(language, "readingsFolderName"),
			name: GetStrLocalized(language, "readings")
		}
	]
	const textsOfThePope = GetStrLocalized(language, "textsOfThePope")

	return (
		<PageContent language={language} setLanguage={setLanguage}>
			<H1TitleBreadcrumb language={language} parentFolders={parentFolders}>{textsOfThePope}</H1TitleBreadcrumb>
			<br /><br />


			<H2TitleId language={language} titleId={"encyclicLetterPatrisCorde"} />
			<br />
			<YouTubePlayer videoId={language === "fr" ? "cwXDAUXNVSE" : "y3KINj7g8b8"} />
			<br /><br />
			<span className="hc-content-text" style={{marginLeft: '80px'}}><GetInnerHtmlStrLocalized language={language} textId="encyclicLetterPatrisCordeText" /></span>
			<br /><br /><br />

			{
				language === "fr" &&
				<React.Fragment>
					<H2TitleId language={language} titleId={"encyclicalFratelliTutti"} />
					<br />
					<YouTubePlayer videoId="6EWdp0ywpGc" />
					<br /><br />
					<span className="hc-content-text" style={{marginLeft: '80px'}}><GetInnerHtmlStrLocalized language={language} textId="encyclicalFratelliTuttiText" /></span>
					<br /><br /><br />

					<H2TitleId language={language} titleId={"encyclicalLaudatoSi"} />
					<br />
					<YouTubePlayer videoId="uhmTZ9ro01E" /><br />
					<YouTubePlayer videoId="BO2JL5E_mec" /><br />
					<YouTubePlayer videoId="EVvTO6jtiDk" /><br />
					<YouTubePlayer videoId="9EU2jIDH6PY" /><br />
					<YouTubePlayer videoId="hJTWiPB40ZA" /><br />
					<YouTubePlayer videoId="8jkRAPSGYJw" /><br />
					<YouTubePlayer videoId="yHWXc59aGak" />
					<br /><br />
					<span className="hc-content-text" style={{marginLeft: '80px'}}><GetInnerHtmlStrLocalized language={language} textId="encyclicalLaudatoSiText" /></span>
					<br /><br /><br />
				</React.Fragment>
			}

			<H2TitleId language={language} titleId={"readThePopesWritings"} />
			<br />
			<span className="hc-content-text" style={{marginLeft: '80px'}}><GetInnerHtmlStrLocalized language={language} textId="readThePopesWritingsLink" /></span>

		</PageContent >
	)
}

export default TextsOfThePope;