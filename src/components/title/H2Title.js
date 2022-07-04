
function H2Title({children}) {

    return (
        <div style={{ marginLeft: 40, marginRight: 40 }}>
            <h2>{children}</h2>
            <hr style={{ height: 2, backgroundColor: '#333333', border: 'none' }} />
        </div>
    )
}

export default H2Title