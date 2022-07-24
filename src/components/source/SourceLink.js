import React from "react"
import { Link } from "react-router-dom"

function SourceLink({ source }) {

    return (
        <React.Fragment>
            {
                source.name !== "" &&
                <React.Fragment>
                    <img src={source.iconPath} alt="icon of the source" className="hc-source-icon" />
                    <span style={{ display:'inline-block', paddingTop: '3px', maxWidth: 650 }}>
                        <Link to={source.path} >{source.name}</Link>
                        {
                            source.url !== "" &&
                            <React.Fragment>&nbsp;&nbsp;&nbsp;(<a href={source.url}>{source.url}</a>)</React.Fragment>
                        }
                    </span>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default SourceLink