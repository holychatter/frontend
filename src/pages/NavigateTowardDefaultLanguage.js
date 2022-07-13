
import React from 'react'
import { Navigate } from 'react-router-dom';


function NavigateTowardDefaultLanguage({ language, setLanguage }) {

    setLanguage(language);
    return <Navigate to={"/" + language} />
}

export default NavigateTowardDefaultLanguage
