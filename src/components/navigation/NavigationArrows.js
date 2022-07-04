import React from 'react'
import NavigationArrow from './NavigationArrow'



function NavigationArrows({ arrows }) {

	return (
		<React.Fragment>
			{
				arrows !== "" &&
				arrows.length > 0 &&
				<React.Fragment>
					{
						arrows.map((arrow, arrowIndex) => {
							return (
								<td key={"arrow-" + arrowIndex} style={{ paddingLeft: arrowIndex === 0 ? "50px" : "0px", paddingTop: "20px" }}>
									<NavigationArrow arrow={arrow} />
								</td>
							)
						})
					}
				</React.Fragment>
			}
		</React.Fragment>
	)
}

export default NavigationArrows