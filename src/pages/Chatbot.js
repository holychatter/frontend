import React, { useEffect, useRef, useState } from 'react'
import Bubble from '../components/chatbot/Bubble';
import ScrollToTop from '../components/util/ScrollToTop';
import GetStrLocalized from '../datas/GetStrLocalized';



function Chatbot({ language, setDocumentTitle, backendUrl }) {

    const chatbotTextareaRef = useRef();
    const messagesEndRef = useRef();
    setDocumentTitle("Chatbot - Holy Chatter");

    const [messages, setMessages] = useState([])
    function onEnterPress(e) {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            onTextValidated();
        }
    }
    function onTextValidated() {
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
                    {
                        messages.map((message, index) => (
                            <div key={`chat-msg-${index}`}>

                                <table width="100%">
                                    <tbody>
                                        <tr>
                                            <td width="96%" style={{ paddingBottom: '15px' }}>
                                                <div style={{ float: 'right' }}>
                                                    <Bubble  >{message}</Bubble>
                                                </div>
                                            </td>
                                            <td width="4%"></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
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
