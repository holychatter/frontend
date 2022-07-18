
function BubbleToUser({ children }) {

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <div className='hc-logo-hc-triangle-box' style={{ paddingLeft: 14, paddingRight: 10 }}>
                            <div className='hc-bubble hc-answer-text' style={{ minHeight: 35, maxWidth: 700, padding: 10, backgroundColor: '#f1f0f0' }}>
                                <span className='hc-content-text'>
                                    <span className="hc-limit-content-width">{children}</span>
                                </span>
                            </div>
                        </div>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default BubbleToUser



