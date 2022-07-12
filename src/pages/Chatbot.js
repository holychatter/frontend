import { useRef, useState } from 'react'
import HCNavBar from '../components/HCNavBar'



function Chatbot({language}) {

    const chatbotTextareaRef = useRef();

    function onEnterPress(e) {
        if(e.keyCode === 13 && e.shiftKey === false) {
          e.preventDefault();
          setMessages([...messages, chatbotTextareaRef.current.value]);
          chatbotTextareaRef.current.value = ""
        }
      }

    const [messages, setMessages] = useState(["Hello"])
    return (
        <div style={{ margin: 200 }}>
            {
                messages.map((message, index) => (
                    <div key={`chat-msg-${index}`}>
                        {message} - {index}
                    </div>
                ))
            }


            <textarea
               ref={chatbotTextareaRef}
               onKeyDown={onEnterPress}
            />
        </div>
    )
}

export default Chatbot
