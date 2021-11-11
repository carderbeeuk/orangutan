import { Link } from "react-router-dom";
import { useState } from "react";

export default function CookieDisclaimer() {
    const [disclaimerAccepted, setDisclaimerAccepted] = useState()

    useState(() => {
        var disclaimerAccepted = localStorage.getItem('disclaimerAccepted') || null
        if(disclaimerAccepted) setDisclaimerAccepted(disclaimerAccepted)
    }, [])

    const rejectDisclaimer = () => {
        setDisclaimerAccepted(false)
        localStorage.setItem('disclaimerAccepted', false)
    }

    const acceptDisclaimer = () => {
        setDisclaimerAccepted(true)
        localStorage.setItem('disclaimerAccepted', true)
    }

    if(disclaimerAccepted === false || disclaimerAccepted) return null
    return(
        <div className='cookie-disclaimer'>
            <div className='row'>
                <p className='col-md-9 col-sm-12'>We use anonymous cookies to enhance site navigation and analyse site usage. <Link to='/legal/privacy-policy'>Privacy Policy</Link></p>
                <p className='col-md-3 col-sm-12' style={{
                    textAlign: 'right'
                }}><button onClick={acceptDisclaimer}>Continue</button><i onClick={rejectDisclaimer} class="fas fa-times"></i></p>
            </div>
        </div>
    )
}