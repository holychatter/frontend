import React from "react"

function RedirectToExtenalUrl({ to }) {

    window.location.replace(to)
    return <React.Fragment></React.Fragment>
}

export default RedirectToExtenalUrl
