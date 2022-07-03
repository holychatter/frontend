import React from 'react'
import YouTubePlayer from './YouTubePlayer'

function Videos({ videoIds }) {
	return (
		<React.Fragment>
			{
				videoIds !== "" &&
				videoIds.length > 0 &&
				<React.Fragment>
					{
						videoIds.map((videoId, videoIdIndex) => {
							return (
								<React.Fragment>
									<span key={"videoid-summary-" + videoIdIndex} style={{ padding: '10px' }}><YouTubePlayer videoId={videoId} /></span>
									<br /><br />
								</React.Fragment>
							)
						})
					}
				</React.Fragment>
			}
		</React.Fragment>
	)
}


export default Videos