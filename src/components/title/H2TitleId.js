import GetHtmlStrLocalized from "../../datas/GetHtmlStrLocalized"
import H2Title from "./H2Title"


function H2TitleId({ language, titleId }) {

    return <H2Title><GetHtmlStrLocalized language={language} textId={titleId} /></H2Title>
}

export default H2TitleId