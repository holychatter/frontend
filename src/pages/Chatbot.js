import { useRef, useState } from 'react'



function Chatbot({ setDocumentTitle }) {

    const chatbotTextareaRef = useRef();
    setDocumentTitle("Chatbot - Holy Chatter");

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
