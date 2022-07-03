import React from "react"
import BigButtonWithTextAtRight from '../bigButton/BigButtonWithTextAtRight'



function ReadingContent({ language, type, content }) {

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    function PrintVerse({ nb, text }) {
        return (
            <React.Fragment>
                <font color="#bf2329">{zeroPad(nb, 2)}</font> <span dangerouslySetInnerHTML={{ __html: text }}></span>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className='hc-long-screen'>
                {
                    content &&
                    content.map((item, index) => {
                        return (
                            <React.Fragment key={item.text + "-" + type + "-verse-" + index}>

                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '50%', paddingLeft: 5, paddingRight: 15 }}>
                                                <div className='hc-content-text'>
                                                    <div style={{ marginLeft: 10 }}>
                                                        <PrintVerse nb={item.nb} text={item.text} />
                                                    </div>
                                                    <br />
                                                </div>
                                            </td>
                                            <td style={{ width: '50%', paddingLeft: 15, paddingRight: 5 }}>
                                                {
                                                    item.link !== "" &&
                                                    <div style={{ marginLeft: 30 }}>
                                                        <BigButtonWithTextAtRight allowPreview={true} language={language} item={item.link} />
                                                        <br />
                                                    </div>
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </React.Fragment>
                        )
                    })
                }
            </div>

            <div className='hc-short-screen'>
                {
                    content &&
                    content.map((item, index) => {
                        return (
                            <React.Fragment key={type + "-verse-" + index}>

                                <div className='hc-content-text'>
                                    <div style={{ marginRight: 20 }}>
                                        <PrintVerse nb={item.nb} text={item.text} />
                                    </div>
                                    <br />
                                </div>
                                <br />

                                {
                                    item.link !== "" &&
                                    <div style={{ marginRight: 20 }}>
                                        <BigButtonWithTextAtRight allowPreview={true} language={language} item={item.link} />
                                        <br />
                                    </div>
                                }
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default ReadingContent