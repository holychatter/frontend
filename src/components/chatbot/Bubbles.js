import React from "react"
import { Link } from "react-router-dom"
import H2TitleId from "../title/H2TitleId"
import Bubble from "./Bubble"

function Bubbles({ language, titleId, chatMsgs }) {

    return (
        <React.Fragment>
            {
                chatMsgs !== "" &&
                chatMsgs.length > 0 &&
                <React.Fragment>
                    <br />
                    <H2TitleId language={language} titleId={titleId} />
                    <div className='hc-categories-left-margin'>
                        {
                            chatMsgs.map((item, index) => {
                                return (
                                    <Link key={"chat-msg-" + item.id + "-" + index} className='hc-move-up-animation' style={{ marginTop: 15, marginRight: 15, marginBottom: 15, display: 'inline-block', textDecoration: 'none' }} to='/fr/preparation-a-la-confirmation'>
                                        <Bubble>{item.mainTrigger}</Bubble>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default Bubbles



