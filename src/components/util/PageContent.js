import React from 'react'
import HCNavBar from '../HCNavBar'
import ScrollToTop from './ScrollToTop'


function PageContent({ language, setLanguage, children }) {

    return (
        <React.Fragment>
            <ScrollToTop />
            <HCNavBar language={language} setLanguage={setLanguage} />
            <div className='hc-main'>
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