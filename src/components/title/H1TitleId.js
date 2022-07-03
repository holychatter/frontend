import GetHtmlStrLocalized from "../../datas/GetHtmlStrLocalized"
import H1Title from "./H1Title"

function H1TitleId({language, titleId}) {

    return <H1Title><GetHtmlStrLocalized language={language} textId={titleId} /></H1Title>
}

export default H1TitleId