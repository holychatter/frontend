import GetHtmlStrLocalized from "../../datas/GetHtmlStrLocalized"


function H2TitleId({ language, titleId }) {

    return (
        <div style={{ marginLeft: 40, marginRight: 40 }}>
            <h2>
                <GetHtmlStrLocalized language={language} textId={titleId} />
            </h2>
            <hr style={{ height: 2, backgroundColor: '#333333', border: 'none' }} />
        </div>
    )
}

export default H2TitleId