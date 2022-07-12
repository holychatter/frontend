import React, { useRef } from "react"

function EmbeddedChatbot({ backendUrl }) {

    const chatbotBubbeRef = useRef();
    var alreadyOpen = false;
    var nbOfTimeOpen = 0;

    function CloseBubble() {
        chatbotBubbeRef.current.style.display = "none";
    }

    function OpenBubble() {
        chatbotBubbeRef.current.style.display = "block";
        alreadyOpen = true;
    }

    function OpenThenCloseBubble() {
        OpenBubble();
        nbOfTimeOpen = nbOfTimeOpen + 1;
        setTimeout(function () {
            nbOfTimeOpen = nbOfTimeOpen - 1;
            if (nbOfTimeOpen === 0) {
                CloseBubble();
            }
        }, 5000);
    }

    function OpenThenCloseBubbleForBigScreen() {
        if (matchMedia('only screen and (min-width: 851px)').matches) {
            OpenThenCloseBubble();
        }
    }


    function StartTimeoutToOpenBubble() {
        if (matchMedia('only screen and (min-width: 851px)').matches) {
            setTimeout(function () {
                if (!alreadyOpen) {
                    OpenThenCloseBubble();
                }
            }, 10000);
        }
    }

    return (
        <React.Fragment>
            <a onLoad={StartTimeoutToOpenBubble} href={backendUrl + "/fr/chatbot"}><img style={{ position: 'fixed', bottom: '30px', right: '30px', height: '100px', width: '124px', zindex: 9 }} src="/holychatter-chat-window/images/two_bubbles_button.png" alt="chat-button" onMouseOver={OpenThenCloseBubbleForBigScreen} /></a>

            <div style={{ display: 'none' }} ref={chatbotBubbeRef}>
                <img style={{ position: 'fixed', cursor: 'pointer', right: '30px', bottom: '227px', zIndex: 9 }} src="/holychatter-chat-window/images/cross_black.png" onClick={CloseBubble} width="20" height="20" alt='close-cross' />
                <div style={{ position: 'fixed', right: '30px', bottom: '120px', zIndex: 9, backgroundImage: "url(/holychatter-chat-window/images/bot_withouttriangle_bottom_right.png)", backgroundPosition: "right 130px bottom 0px", backgroundSize: "50px 24px", backgroundRepeat: "no-repeat", paddingBottom: "14px" }}>
                    <div style={{ borderRadius: '10px', fontSize: '15px', padding: '10px', backgroundColor: '#f1f0f0', minHeight: '50px', maxWidth: '730px', fontWeight: 'normal' }}>
                        Bonjour je suis le chatbot Théophile. <img src="/holychatter-chat-window/images/smile.png" width="20" height="20" alt='smile-smiley' /><br />
                        Si vous voulez discuter sur la foi chrétienne,<br />
                        vous pouvez cliquer sur le bouton ci-dessous.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EmbeddedChatbot



