import React from "react"
import H1TitleId from "../components/title/H1TitleId"
import PageContent from '../components/util/PageContent'
import BigButtonWithTextABottom from "../components/bigButton/BigButtonWithTextABottom"
import GetStrLocalized from "../datas/GetStrLocalized"
import GetHtmlStrLocalized from "../datas/GetHtmlStrLocalized"

function Readings({ language, setLanguage }) {


	function SmallYoutubePlayer({ videoId }) {
		return <iframe className="hc-big-button-normal-height hc-big-button-normal-width hc-small-margin" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen frameBorder="0"
			src={"https://www.youtube.com/embed/" + videoId + "?rel=0"} title={"Video  " + videoId} align="top" style={{ marginLeft: '50px' }}></iframe>
	}
	const biblePath = "/" + language + "/" + GetStrLocalized(language, "readingsFolderName") + "/" + GetStrLocalized(language, "bibleFolderName")
	const cccPath = "/" + language + "/" + GetStrLocalized(language, "readingsFolderName") + "/" + GetStrLocalized(language, "catechismOfTheCatholicChurchFolderName")
	const textsOfThePopePath = "/" + language + "/" + GetStrLocalized(language, "readingsFolderName") + "/" + GetStrLocalized(language, "textsOfThePopeFolderName")
    const theSocialDoctrineOfTheChurchUrl = GetStrLocalized(language, "theSocialDoctrineOfTheChurchUrl")

	return (
		<PageContent language={language} setLanguage={setLanguage}>
			<H1TitleId language={language} titleId="readings" />
			<br /><br />


			<table className='hc-categories-left-margin'>
				<tbody>
					<tr>
						<td style={{ width: '33%', paddingLeft: '5px', paddingRight: '15px' }}>
							<BigButtonWithTextABottom link={biblePath} image="/buttons/bible.jpg" duration="" title={GetStrLocalized(language, "bible")} tags="" sourceImage="" sourceName="" beginOfClassName="hc-big-button-normal" />
						</td>
						<td style={{ width: '33%', paddingLeft: '15px', paddingRight: '15px' }}>
							<SmallYoutubePlayer videoId={language === "fr" ? "pYYIYRhlVoI" : "ak06MSETeo4"} />
						</td>
						<td style={{ width: '34%', paddingLeft: '15px', paddingRight: '5px' }}>
							<div className="hc-long-screen hc-content-text">
								<div className='hc-small-margin' style={{ paddingTop: '10px', paddingLeft: '10px' }}><b><GetHtmlStrLocalized language={language} textId="plan" /></b><br /></div>
								<div className='hc-small-margin' style={{ paddingTop: '5px', paddingLeft: '10px' }}><a href={biblePath + "/" + GetStrLocalized(language, "oldTestamentFolderName")}>1) <GetHtmlStrLocalized language={language} textId="oldTestament" /></a><br /></div>
								<div className='hc-small-margin' style={{ paddingTop: '5px', paddingLeft: '10px' }}><a href={biblePath + "/" + GetStrLocalized(language, "newTestamentFolderName")}>2) <GetHtmlStrLocalized language={language} textId="newTestament" /></a><br /></div>
							</div>
						</td>
					</tr>

					<tr>
						<td style={{ width: '33%', paddingLeft: '5px', paddingRight: '15px' }}>
							<BigButtonWithTextABottom link={cccPath} image="/buttons/rosace.jpg" duration="" title={GetStrLocalized(language, "catechismOfTheCatholicChurch")} tags="" sourceImage="" sourceName="" beginOfClassName="hc-big-button-normal" />
						</td>
						<td style={{ width: '33%', paddingLeft: '15px', paddingRight: '15px' }}>
							<SmallYoutubePlayer videoId={language === "fr" ? "65XIj6HiVag" : "MhScAGLQBEU"} />
						</td>
						<td style={{ width: '34%', paddingLeft: '15px', paddingRight: '5px' }}>
							<div className="hc-long-screen hc-content-text">
								<div className='hc-small-margin' style={{ paddingTop: '10px', paddingLeft: '10px' }}><b><GetHtmlStrLocalized language={language} textId="plan" /></b><br /></div>
								<div className='hc-small-margin' style={{ paddingLeft: '10px' }}><a href={cccPath + "/" + GetStrLocalized(language, "prologueFolderName")}>1) <GetHtmlStrLocalized language={language} textId="prologue" /></a><br /></div>
								<div className='hc-small-margin' style={{ paddingLeft: '10px' }}><a href={cccPath + "/" + GetStrLocalized(language, "theProfessionOfFaithFolderName")}>2) <GetHtmlStrLocalized language={language} textId="theProfessionOfFaith" /></a><br /></div>
								<div className='hc-small-margin' style={{ paddingLeft: '10px' }}><a href={cccPath + "/" + GetStrLocalized(language, "theCelebrationOfChristianMisteryFolderName")}>3) <GetHtmlStrLocalized language={language} textId="theCelebrationOfChristianMistery" /></a><br /></div>
								<div className='hc-small-margin' style={{ paddingLeft: '10px' }}><a href={cccPath + "/" + GetStrLocalized(language, "lifeInChristFolderName")}>4) <GetHtmlStrLocalized language={language} textId="lifeInChrist" /></a><br /></div>
								<div className='hc-small-margin' style={{ paddingLeft: '10px' }}><a href={cccPath + "/" + GetStrLocalized(language, "christianPrayerFolderName")}>5) <GetHtmlStrLocalized language={language} textId="christianPrayer" /></a><br /></div>
							</div>
						</td>
					</tr>


					<tr>
						<td style={{ width: '33%', paddingLeft: '5px', paddingRight: '15px' }}>
							<BigButtonWithTextABottom link={textsOfThePopePath} image="/buttons/pope_writing.jpg" duration="" title={GetStrLocalized(language, "textsOfThePope")} tags="" sourceImage="" sourceName="" beginOfClassName="hc-big-button-normal" />
						</td>
						<td style={{ width: '33%', paddingLeft: '15px', paddingRight: '15px' }}>
							{language === "fr" && <SmallYoutubePlayer videoId="QQEbU_VLAhs" />}
						</td>
						<td style={{ width: '34%', paddingLeft: '15px', paddingRight: '5px' }}>
							<div className="hc-long-screen hc-content-text">
								<div className='hc-small-margin' style={{ paddingTop: '10px', paddingLeft: '10px' }}><b><GetHtmlStrLocalized language={language} textId="examples" /></b><br /></div>
								<div className='hc-small-margin' style={{ paddingLeft: '10px' }}><a href={textsOfThePopePath}><GetHtmlStrLocalized language={language} textId="encyclicLetterPatrisCorde" /></a><br /></div>
								{language === "fr" && <div className='hc-small-margin' style={{ paddingLeft: '10px' }}><a href={textsOfThePopePath}><GetHtmlStrLocalized language={language} textId="encyclicalFratelliTutti" /></a><br /></div>}
								{language === "fr" && <div className='hc-small-margin' style={{ paddingLeft: '10px' }}><a href={textsOfThePopePath}><GetHtmlStrLocalized language={language} textId="encyclicalLaudatoSi" /></a><br /></div>}
							</div>
						</td>
					</tr>
				</tbody>
			</table>


			<br />
			<div style={{ paddingLeft: '20px' }}>
				<b className='hc-button-title-style'><GetHtmlStrLocalized language={language} textId="theSocialDoctrineOfTheChurch" /></b><br />
				<a href={theSocialDoctrineOfTheChurchUrl}>{theSocialDoctrineOfTheChurchUrl}</a>
			</div>


		</PageContent>
	)
}

export default Readings;