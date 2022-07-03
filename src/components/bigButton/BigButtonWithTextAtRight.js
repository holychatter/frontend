import React from 'react'
import { Link } from "react-router-dom"
import GetStrLocalized from '../../datas/GetStrLocalized';
import YouTube from 'react-youtube';
import { useState } from 'react'


function BigButtonWithTextAtRight({ allowPreview, language, item }) {

	if (item.image === "") {
		item.image = item.sourceImage;
	}
	let versesStr = ""
	if (item.firstVerse !== "") {
		if (item.lastVerse !== "") {
			versesStr += GetStrLocalized(language, "verses") + ` ${item.firstVerse}-${item.lastVerse}`
		} else {
			versesStr += GetStrLocalized(language, "verse") + ` ${item.firstVerse}`

		}
	}

	const opts = {
		height: '135',
		width: '243',
		playerVars: {
			autoplay: 1,
			start: item.startTimeSeconds,
			end: item.endTimeSeconds,
		},
	};

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	const [videoDisplayed, setVideoDisplayed] = useState(false)
	const [videoPlayer, setVideoPlayer] = useState(null)
	const [buttonText, setButtonText] = useState(GetStrLocalized(language, "listen"))

	function onVideoReady(event) {
		setVideoPlayer(event.target);
	}

	function Bb_loadYoutubeVideo() {

		if (!videoDisplayed) {
			setVideoDisplayed(true);
			setButtonText(GetStrLocalized(language, "stop"));
		} else {
			try {
				videoPlayer.pauseVideo();
				setVideoDisplayed(false);
				setButtonText(GetStrLocalized(language, "listen"));
			} catch (error) {
				console.error(error);
			}
		}
	}

	return (
		<React.Fragment>
			<table style={{ width: '100%' }}>
				<tbody>
					<tr>
						<td className="hc-big-button-search-width">
							{videoDisplayed ?
								<YouTube opts={opts} videoId={item.youtubeId} onReady={onVideoReady} /> :
								<Link style={{ color: 'white', textAlign: 'left', width: '100%', textDecoration: 'none', outline: 'none' }} to={item.link}>
									<div className="hc-big-button-search-width hc-big-button-search-height hc-center-background-image" style={{ position: 'relative', borderRadius: 10, borderWidth: 0, backgroundImage: 'url(' + item.image + ')' }}>
										{item.duration !== "" && <span className="hc-big-button-search-durationtop" style={{ position: 'absolute', backgroundColor: 'black', padding: 3, right: 8 }}>{item.duration}</span>}
									</div>
								</Link>
							}
						</td>
						<td className="hc-big-button-text-at-right-padding">
							<Link to={item.link} style={{ textDecoration: 'none' }}><b className='hc-button-title-style'>{item.title}</b></Link>
							<span style={{ color: '#22292f' }}><p>{allowPreview && <React.Fragment> <button style={{ cursor: 'pointer' }} onClick={Bb_loadYoutubeVideo} >{buttonText}</button> &nbsp; </React.Fragment>}{item.tags}</p></span>
							<p><span style={{ textAlign: 'left', color: '#22292f' }}>{item.sourceImage !== "" && <img src={item.sourceImage} alt='Source logo' width="23" height="23" style={{ marginRight: 13 }} />}{item.sourceName}</span></p>
							<span>{versesStr}</span>
						</td>
					</tr>
				</tbody>
			</table>
		</React.Fragment>
	)
}

export default BigButtonWithTextAtRight