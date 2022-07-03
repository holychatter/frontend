import React from 'react'
import BigButtonWithTextABottom from './BigButtonWithTextABottom'


function Categories({ categories }) {

	return (
		<div className="hc-categories-left-margin">
		{
			categories !== "" &&
			categories.length > 0 &&
			<React.Fragment>
				{
					categories.map((item, index) => {
						return (
							<BigButtonWithTextABottom key={"categories-btn-" + index} link={item.url} image={item.image} duration="" title={item.name} tags="" sourceImage="" sourceName="" beginOfClassName="hc-big-button-normal" />
						)
					})
				}
			</React.Fragment>
		}
	</div>
	)
}

export default Categories