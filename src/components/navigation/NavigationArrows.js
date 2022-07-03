import React from 'react'
import NavigationArrow from './NavigationArrow'



function NavigationArrows({ arrows }) {

	return (
		<div style={{ paddingLeft: "50px", paddingTop: "20px" }}>
			{
				arrows !== "" &&
				arrows.length > 0 &&
				<React.Fragment>
					<br />
					{
						arrows.map((arrow, arrowIndex) => {
							return (
								<td key={"arrow-" + arrowIndex}>
									<NavigationArrow arrow={arrow} />
								</td>
							)
						})
					}
				</React.Fragment>
			}
		</div>
	)
}

export default NavigationArrows