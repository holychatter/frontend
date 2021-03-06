import React from 'react'
import BigButtonWithTextABottom from './BigButtonWithTextABottom'


function CategoriesBigButtons({ categories, beginOfKey="" }) {

	return (
		<div className="hc-categories-left-margin">
		{
			categories !== "" &&
			categories.length > 0 &&
			<React.Fragment>
				{
					categories.map((item, index) => {
						return (
							<BigButtonWithTextABottom key={beginOfKey + "categories-btn-" + index} link={item.link} image={item.image} duration={item.duration} title={item.title} tags={item.subTitle} sourceImage={item.sourceImage} sourceName={item.sourceName} beginOfClassName="hc-big-button-normal" />
						)
					})
				}
			</React.Fragment>
		}
	</div>
	)
}

export default CategoriesBigButtons