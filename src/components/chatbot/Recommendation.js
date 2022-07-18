import React from "react"

function Recommendation({ children, isPrimary }) {

    return (
        <React.Fragment>
            {
                isPrimary ?
                    <button style={{ fontSize: '14px', lineHeight: '27px', margin: '5px' }}>{children}</button>
                    :
                    <button style={{ color: '#2980B9', backgroundColor: 'white', fontSize: '14px', lineHeight: '27px', margin: '5px' }}>{children}</button>
            }
        </React.Fragment>
    )
}

export default Recommendation



