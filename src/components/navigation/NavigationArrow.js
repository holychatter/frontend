import React from 'react'
import image_arrow_left from '../../assets/resources/custom/icons/arrow_left.png'
import image_arrow_left_selected from '../../assets/resources/custom/icons/arrow_left_selected.png'
import image_arrow_right from '../../assets/resources/custom/icons/arrow_right.png'
import image_arrow_right_selected from '../../assets/resources/custom/icons/arrow_right_selected.png'
import image_arrow_up from '../../assets/resources/custom/icons/arrow_up.png'
import image_arrow_up_selected from '../../assets/resources/custom/icons/arrow_up_selected.png'



function NavigationArrow({ arrow }) {

	const typeLeft = "left"
	const typeRight = "right"

	function onMouseOverCallback(e) {
		if (arrow.type === typeLeft)
			e.target.src = image_arrow_left_selected;
		else if (arrow.type === typeRight)
			e.target.src = image_arrow_right_selected;
		else
			e.target.src = image_arrow_up_selected;
	}

	function onMouseOutCallback(e) {
		if (arrow.type === typeLeft)
			e.target.src = image_arrow_left;
		else if (arrow.type === typeRight)
			e.target.src = image_arrow_right;
		else
			e.target.src = image_arrow_up;
	}


	return (
		<span className='hc-onTopRight-from-header'>
			<a href={arrow.url}>
				<img src={arrow.type === typeLeft ? image_arrow_left : (arrow.type === typeRight ? image_arrow_right : image_arrow_up)} onMouseOver={onMouseOverCallback}
					onMouseOut={onMouseOutCallback} height='30px' width='30px' />
			</a>
		</span>
	)
}

export default NavigationArrow