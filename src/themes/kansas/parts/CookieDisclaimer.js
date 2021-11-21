import { Link } from "react-router-dom";
import { useState } from "react";

export default function CookieDisclaimer() {
    const [disclaimerAccepted, setDisclaimerAccepted] = useState()

    const setDisclaimerAcceptedCookie = (value, days) => {
        const d = new Date()
        d.setTime(d.getTime() + (days*24*60*60*1000))
        let expires = "expires="+ d.toUTCString()
        document.cookie = "disclaimerAccepted=" + value + ";" + expires + ";path=/"
    }

    const getDisclaimerAcceptedCookie = () => {
        let name = "disclaimerAccepted=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
            }
        }
        return null;
    }

    useState(() => {
        var disclaimerAccepted = getDisclaimerAcceptedCookie() || null
        if(disclaimerAccepted) setDisclaimerAccepted(disclaimerAccepted)
    }, [])

    const rejectDisclaimer = () => {
        setDisclaimerAccepted(false)
        setDisclaimerAcceptedCookie(false, 7)
    }

    const acceptDisclaimer = () => {
        setDisclaimerAccepted(true)
        setDisclaimerAcceptedCookie(true, 7)
    }

    if(disclaimerAccepted === false || disclaimerAccepted) return null
    return(
        <div className='cookie-disclaimer'>
            <div className='row'>
                <p className='col-md-9 col-sm-12'>Your privacy is important to us, that's why we only use anonymous cookies to enhance site navigation and analyse site usage. For more information about how we use your data please visit our <Link to='/legal/privacy-policy'>Privacy Policy</Link>.</p>
                <p className='col-md-3 col-sm-12' style={{
                    textAlign: 'right'
                }}><button onClick={acceptDisclaimer}>That's fine, thanks</button><i onClick={rejectDisclaimer} className="fas fa-times"></i></p>
                <div className='clearfixx'></div>
            </div>
        </div>
    )
}