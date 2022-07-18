import React from "react"
import BubbleToUser from "./BubbleToUser"


function BubblesToUserInChat({ children }) {

    return (
        <table width="100%">
            <tbody>
                <tr>
                    <td width="4%"></td>
                    <td width="96%" style={{ paddingBottom: '15px' }}>
                        <div>
                            <BubbleToUser>{children}</BubbleToUser>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default BubblesToUserInChat



