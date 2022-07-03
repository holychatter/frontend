import React from 'react'
import BigButtonWithTextABottom from './BigButtonWithTextABottom'


function Chapters({ chapters }) {

	return (
		<div className="hc-chapters-left-margin">
		{
			chapters !== "" &&
			chapters.length > 0 &&
			<React.Fragment>
				{
					chapters.map((item, index) => {
						return (
							<BigButtonWithTextABottom key={"categories-btn-" + index} link={item.url} image={item.image} duration="" title={item.name} tags="" sourceImage="" sourceName="" beginOfClassName="hc-big-button-chapter" />
						)
					})
				}
			</React.Fragment>
		}
	</div>
	)
}

export default Chapters