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

	const [request, setRequest] = useState({ bubbles: [] })
    const [messages, setMessages] = useState([])
    function onEnterPress(e) {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            onTextValidated();
        }
    }
    function onTextValidated() {

        const wtUrl = backendUrl + "/chatbot_json?l=" + language + "&chatbotId=&textInput=" + chatbotTextareaRef.current.value;
        console.log("Request url : " + wtUrl);
        const getBackendWithFetch = async () => {
            const response = await fetch(wtUrl);
            const jsonData = await response.json();
            setRequest(jsonData);
        };
        getBackendWithFetch();
        setMessages([...messages, chatbotTextareaRef.current.value]);
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
                    <BubblesToUserInChat>
                        Bonsoir je suis Théophile. <img src="/holychatter-chat-window/images/smile.png" width="20" height="20" alt="smile smiley" /><br />
                        <b>Je vous souhaite la bienvenue !</b><br />
                        Que voulez-vous faire ?
                    </BubblesToUserInChat>
                    <RecommendationsWrapperForChat>
                        <Recommendation isPrimary={true}>Oui, allons-y !</Recommendation>
                    </RecommendationsWrapperForChat>
                    {
                        messages.map((message, index) => (
                            <BubblesFromUserInChat key={`chat-msg-${index}`}>{message}</BubblesFromUserInChat>
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
