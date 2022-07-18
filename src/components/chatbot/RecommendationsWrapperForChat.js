
function RecommendationsWrapperForChat({ children }) {

    return (
        <table width="100%">
            <tbody>
                <tr>
                    <td width="4%"></td>
                    <td width="96%" style={{ paddingLeft: 9, paddingBottom: 15 }}>
                        <div className="hc-width-chat-recommendation-max-width">
                            {children}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default RecommendationsWrapperForChat



