import '../assets/resources/custom/style/main-6.css'
import '../assets/resources/custom/style/bootstrap_hc.css'
import { Link } from "react-router-dom";
import image_logo from '../assets/upload/holy_chatter_logo.png'
import image_youtube from '../assets/resources/custom/images/youtube.png'
import image_magnifying_glass from '../assets/resources/custom/images/magnifying_glass.jpg'
import GetStrLocalized from '../datas/GetStrLocalized'
import React from 'react'
import OpenNav from './nav/OpenNav'
import CloseNav from './nav/CloseNav'


function Banner({ language }) {

	function openOrCloseNav() {
		if (document.getElementById("hcSidenavId").style.width === "250px") {
			CloseNav();
		} else {
			OpenNav();
		}
	}

	return (
		<React.Fragment>
			<div className='hc-fixed-banner'>
				<span style={{ display: 'block', height: 13 }}></span>
				<table style={{ width: '100%' }}>
					<tbody>
						<tr>
							<td id='open-close-nav-bar-btn-id' onClick={openOrCloseNav} unselectable='on' className='hc-top-bar-menu-button-css' style={{ paddingTop: 7, paddingLeft: 20, fontSize: 23, cursor: 'pointer' }}>&#9776;</td>
							<td className="hc-top-bar-sides-css">
								<Link style={{ outline: 0 }} to={"/" + language}>
									<img title="Holy Chatter" unselectable="on" src={image_logo} alt="Holy Chatter logo" className="hc-main-logo unselectable" />
								</Link>
							</td>

							<td>

								<table className="hc-not-very-short-screen hc-top-bar-center-css" style={{ width: "100.0%", height: 40 }}>
									<tbody>
										<tr>
											<td style={{ width: "20.0%" }}></td>
											<td style={{ width: "55.0%" }}>
												<input id='search-input' type='text' className='form-control' placeholder={GetStrLocalized(language, "search")} style={{ height: 24 }} autoFocus />
											</td>
											<td style={{ paddingLeft: 27, width: "5.0%" }}>
												<button id="search-button" type="submit" className="btn-primary hc-search-btn unselectable btn" style={{ width: 48, height: 37, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 5 }}></button>
											</td>
											<td style={{ width: "20.0%" }}></td>
										</tr>
									</tbody>
								</table>



							</td>


							<td style={{ paddingTop: 5 }} className="hc-top-bar-sides-css">

								<table>
									<tbody>
										<tr>
											<td><span title="Options">
												<span className="hc-very-short-screen" style={{ paddingRight: 10 }}>
													<Link to={"/" + language + "/" + GetStrLocalized(language, "searchFolderName")}>
														<img src={image_magnifying_glass} alt="search" height="30px" width="30px" />
													</Link>
												</span>
											</span></td>
											<td><span title="Youtube channel">
												<span className="hc-not-very-short-screen" style={{ paddingRight: 15 }}>
													<a href="https://www.youtube.com/c/HOLYChatterfr">
														<img src={image_youtube} alt="YouTube logo" height="30" width="30" />
													</a>
												</span>
											</span></td>
										</tr>
									</tbody>
								</table>

							</td>

						</tr>
					</tbody>
				</table>
				<span style={{ display: 'block', height: 13 }}></span>
			</div>
		</React.Fragment>
	)

}

export default Banner
