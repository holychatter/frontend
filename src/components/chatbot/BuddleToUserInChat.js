import React from "react"
import SourceLink from "../source/SourceLink"
import BubbleToUser from "./BubbleToUser"


function BubblesToUserInChat({ source, children }) {

    return (
        <table width="100%">
            <tbody>
                <tr>
                    <td width="4%"></td>
                    <td width="96%">
                        <div>
                            <BubbleToUser>{children}</BubbleToUser>
                            {
                                source !== undefined &&
                                <div style={{ display: 'inline-block', marginLeft: 14, padding: 5, backgroundColor: 'white' }}>
                                    <SourceLink source={source} />
                                </div>
                            }
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default BubblesToUserInChat



