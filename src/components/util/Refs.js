import React from "react"
import { Link } from "react-router-dom"
import GetStrLocalized from '../../datas/GetStrLocalized'
import H2TitleId from '../title/H2TitleId'
import GetHtmlStrLocalized from "../../datas/GetHtmlStrLocalized"
import ReadingContent from "./ReadingContent"


function Refs({ language, type, refs }) {

    return (
        <React.Fragment>
            <br />
            {
                refs !== "" &&
                refs.length > 0 &&
                <React.Fragment>
                    <H2TitleId language={language} titleId={type === "bible" ? "biblicalReferences" : "referencesToTheCatechismOfTheCatholicChurch"} />
                    {
                        refs.map((chapterItem, chapterIndex) => {
                            return (
                                <div key={"bible-chapter-" + chapterIndex} style={{ marginLeft: 40 }}>
                                    <br />
                                    &nbsp;&nbsp;
                                    <div className='hc-content-text'>
                                        <b>
                                            <GetHtmlStrLocalized language={language} textId={type === "bible" ? "reference" : "catechismOfTheCatholicChurchNum"} />&nbsp;
                                            <Link to={"/" + language + "/" + GetStrLocalized(language, "readingsFolderName") + "/" + GetStrLocalized(language, type === "bible" ? "bibleFolderName" : "catechismOfTheCatholicChurchFolderName") + "/" + chapterItem.referenceUrlChapterName}>{chapterItem.reference}</Link>
                                        </b>
                                    </div>
                                    <br />
                                    <br />
                                    <ReadingContent language={language} type={type} content={chapterItem.content} />
                                </div>
                            )
                        })
                    }
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default Refs