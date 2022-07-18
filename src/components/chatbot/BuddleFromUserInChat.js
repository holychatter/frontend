import React from "react"
import BubbleFromUser from "./BubbleFromUser"


function BubblesFromUserInChat({ children }) {

    return (
        <table width="100%">
            <tbody>
                <tr>
                    <td width="96%" style={{ paddingBottom: '15px' }}>
                        <div style={{ float: 'right' }}>
                            <BubbleFromUser>{children}</BubbleFromUser>
                        </div>
                    </td>
                    <td width="4%"></td>
                </tr>
            </tbody>
        </table>
    )
}

export default BubblesFromUserInChat



