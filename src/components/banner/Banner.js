import '../../assets/resources/custom/style/main-6.css'
import '../../assets/resources/custom/style/bootstrap_hc.css'
import { Link, useNavigate } from "react-router-dom";
import image_logo from '../../assets/upload/holy_chatter_logo.png'
import image_youtube from '../../assets/resources/custom/images/youtube.png'
import image_magnifying_glass from '../../assets/resources/custom/images/magnifying_glass.jpg'
import GetStrLocalized from '../../datas/GetStrLocalized'
import React, { useRef } from 'react'
import OpenNav from '../navigation/OpenNav'
import CloseNav from '../navigation/CloseNav'
import SearchInput from './SearchInput';


function Banner({ language, searchValue }) {

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

							<td width="100%" className="hc-very-short-screen" />

							<td className="hc-not-very-short-screen">
								<SearchInput language={language} searchValue={searchValue} />
							</td>


							<td style={{ paddingTop: 5 }} className="hc-top-bar-sides-css">

								<table>
									<tbody>
										<tr>
											<td><span className="hc-very-short-screen" title="Options">
												<span style={{ paddingRight: 10 }}>
													<Link to={"/" + language + "/" + GetStrLocalized(language, "searchFolderName")}>
														<img src={image_magnifying_glass} alt="search" height="30px" width="30px" />
													</Link>
												</span>
											</span></td>
											<td><span className="hc-not-very-short-screen" title="Youtube channel">
												<span style={{ paddingRight: 15 }}>
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
