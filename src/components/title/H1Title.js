
function H1Title({children}) {

    return (
        <div className='hc-text-align-center'>
            <div style={{ height: 1 }}></div>
            <div>
                <h1 className='hc-h1-main-title'>{children}</h1>
            </div>
            <div style={{ height: 1 }}></div>
        </div>
    )
}

export default H1Title