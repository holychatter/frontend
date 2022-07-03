import React from 'react'
import { Link } from "react-router-dom"


function BigButtonWithTextABottom({ link, image, duration, title, tags, sourceImage, sourceName, beginOfClassName }) {

	if (image === "") {
		image = sourceImage;
	}

    return (
        <React.Fragment>
			<div className='hc-move-up-animation hc-inline-flex hc-small-margin'>
				<span className={beginOfClassName + "-width"} style={{textAlign: 'left'}}>
					<Link to={link} style={{color: 'white', textDecoration: 'none', outline: 'none'}}>
						<div className={beginOfClassName + "-width " + beginOfClassName + "-height hc-center-background-image"} style={{borderRadius: 10, borderWidth: 0, backgroundImage: "url(" + image + ")" }}>
							{ duration !== "" && <span className={beginOfClassName + "-durationtop"} style={{position: 'absolute', backgroundColor: 'black', padding: 3, right: 8}}>{duration}</span> }
						</div>
						<span style={{textAlign: 'left'}}><b className='hc-button-title-style'><p>{title}</p></b></span>
					</Link>
					<span style={{textAlign: 'left', color: '#22292f'}}><p>{tags}</p></span>
					<span style={{textAlign: 'left', color: '#22292f'}}>{sourceImage !== "" && <img src={sourceImage} alt='Source logo' width="23" height="23" style={{marginRight: 13}} />}{sourceName}</span>
				</span>
			</div>
        </React.Fragment>
    )
}

export default BigButtonWithTextABottom