import React from 'react'
import ScrollToTop from './ScrollToTop'


function PageContent({ children }) {

    return (
        <React.Fragment>
            <ScrollToTop />
            <div className='hc-main'>
                <br />
                {children}
                <div className="hc-content-text" style={{ textAlign: 'center', margin: '0 auto', marginTop: 50, marginBottom: 25 }}>
                    holychatter@gmail.com
                </div>
                <br />
            </div>
        </React.Fragment>
    )
}

export default PageContent