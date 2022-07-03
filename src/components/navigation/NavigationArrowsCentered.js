import React from 'react'
import NavigationArrows from './NavigationArrows'


function NavigationArrowsCentered({ arrows }) {

	return (
		<table>
			<tbody>
				<tr>
					<td width='50%'></td>
					<NavigationArrows arrows={arrows} />
					<td width='50%'></td>
				</tr>
			</tbody>
		</table>
	)
}

export default NavigationArrowsCentered