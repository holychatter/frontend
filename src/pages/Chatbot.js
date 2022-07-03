import { useState } from 'react'
import HCNavBar from '../components/HCNavBar'



function Chatbot({language, setLanguage}) {

    function onEnterPress(e) {
        if(e.keyCode === 13 && e.shiftKey === false) {
          e.preventDefault();
          setMessages([...messages, document.getElementById("chatbotInputId").value]);
          document.getElementById("chatbotInputId").value = ""
        }
      }

    const [messages, setMessages] = useState(["Hello"])
    return (
        <div style={{ margin: 200 }}>
            <HCNavBar language={language} setLanguage={setLanguage} />
            {
                messages.map((message, index) => (
                    <div key={`chat-msg-${index}`}>
                        {message} - {index}
                    </div>
                ))
            }


            <textarea
               id="chatbotInputId"
               onKeyDown={onEnterPress}
            />
        </div>
    )
}

export default Chatbot
