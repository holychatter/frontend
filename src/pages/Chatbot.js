import React, { useEffect, useRef, useState } from 'react'
import BubblesFromUserInChat from '../components/chatbot/BuddleFromUserInChat';
import BubblesToUserInChat from '../components/chatbot/BuddleToUserInChat';
import Recommendation from '../components/chatbot/Recommendation';
import RecommendationsWrapperForChat from '../components/chatbot/RecommendationsWrapperForChat';
import ScrollToTop from '../components/util/ScrollToTop';
import GetStrLocalized from '../datas/GetStrLocalized';



function Chatbot({ language, setDocumentTitle, backendUrl }) {

    const chatbotTextareaRef = useRef();
    const messagesEndRef = useRef();
    setDocumentTitle("Chatbot - Holy Chatter");

    function writeBuble(fromUser, str, isHtmlCode, recommendations) {
        return {
            elts: [
                {
                    str: str,
                    isHtmlCode: isHtmlCode
                }
            ],
            fromUser: fromUser,
            recommendations: recommendations
        }
    }

    const [request, setRequest] = useState({ bubbles: [] })
    const [messages, setMessages] = useState([
        writeBuble("false",
            "Bonsoir je suis Théophile. <img src='/holychatter-chat-window/images/smile.png' width='20' height='20' alt='smile smiley' /><br />" +
            "<b>Je vous souhaite la bienvenue !</b><br />" +
            "Que voulez-vous faire ?", "true", [
            {
                str: "Oui, allons-y !",
                isPrimary: "true"
            },
            {
                str: "Continuer la conversation",
                isPrimary: "false"
            }
        ])
    ])
    function onEnterPress(e) {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            onTextValidated();
        }
    }




    function onTextValidated() {
        const newtext = chatbotTextareaRef.current.value;
        if (newtext === "")
            return;

        const bubble = writeBuble("true", newtext, "false", [])
        var messagesLocal = [...messages, bubble]
        setMessages(messagesLocal);

        const wtUrl = backendUrl + "/chatbot_json?l=" + language + "&chatbotId=&textInput=" + newtext;
        console.log("Request url : " + wtUrl);
        const getBackendWithFetch = async () => {
            const response = await fetch(wtUrl);
            const jsonData = await response.json();
            setRequest(jsonData.bubbles);
            messagesLocal = [...messagesLocal, ...jsonData.bubbles]
            setMessages(messagesLocal);
        };
        getBackendWithFetch();


        chatbotTextareaRef.current.value = ""
    }

    function scrollToBottom() {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    return (
        <React.Fragment>
            <ScrollToTop />
            <div className="hc-chat-left-container hc-main hc-long-screen">
                <div className="list-group">

                </div>
            </div>
            <div className="hc-chat-right-container hc-heart-background">
                <div className='hc-chat-content'>
                    {
                        messages.map((message, messageIndex) => (
                            <span key={`chat-msg-${messageIndex}`}>
                                {
                                    message.fromUser === "true" ?
                                        <BubblesFromUserInChat>
                                            {
                                                message.elts.map((elt, eltIndex) => (
                                                    <span key={`msg-elt-${messageIndex}-${eltIndex}`}>{elt.str}</span>
                                                ))


                                            }
                                        </BubblesFromUserInChat>
                                        :
                                        <BubblesToUserInChat>
                                            {
                                                message.elts.map((elt, eltIndex) => (
                                                    <span key={`msg-elt-${messageIndex}-${eltIndex}`}>
                                                        {
                                                            elt.isHtmlCode === "true" ?
                                                                <span dangerouslySetInnerHTML={{ __html: elt.str }}></span>
                                                                :
                                                                <span>{elt.str}</span>
                                                        }
                                                    </span>
                                                ))
                                            }
                                        </BubblesToUserInChat>
                                }

                                <RecommendationsWrapperForChat>
                                    {
                                        message.recommendations !== undefined &&
                                        message.recommendations.map((recommendation, recIndex) => (
                                            <span key={`msg-rec-${messageIndex}-${recIndex}`}><Recommendation isPrimary={recommendation.isPrimary === "true"}>{recommendation.str}</Recommendation></span>
                                        ))
                                    }
                                </RecommendationsWrapperForChat>
                            </span>
                        ))
                    }
                    <div ref={messagesEndRef} />
                </div>
            </div>
            <div className="hc-right-footer">
                <table style={{ marginTop: "15px", marginLeft: '15px', marginRight: '15px' }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "99.0%" }}>
                                <input ref={chatbotTextareaRef} onKeyDown={onEnterPress} type='text' className='form-control' placeholder={GetStrLocalized(language, "writeASentence")} style={{ height: 24 }} autoFocus />
                            </td>
                            <td style={{ paddingLeft: 27, width: "300px" }}>
                                <button onClick={onTextValidated} type="submit" className="btn-primary hc-send-btn unselectable btn" style={{ width: 48, height: 37, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 5 }}></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default Chatbot
