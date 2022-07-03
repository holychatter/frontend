import React from 'react'
import BigButtonWithTextABottom from './BigButtonWithTextABottom'

function BigButtonsWithTextABottom({ videos }) {

	return (
		<React.Fragment>
			{
				videos &&
				videos.map((videoItem, videoIndex) => {
					return <BigButtonWithTextABottom key={videoIndex} link={videoItem.link} image={videoItem.image} duration={videoItem.duration} title={videoItem.title} tags={videoItem.tags} sourceImage={videoItem.sourceImage} sourceName={videoItem.sourceName} beginOfClassName="hc-big-button-normal" />
				})
			}
		</React.Fragment>
	)
}

export default BigButtonsWithTextABottom