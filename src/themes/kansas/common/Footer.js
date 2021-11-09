import { Link } from "react-router-dom"

export default function Footer(props) {
    return(
        <footer>
            <div className='outer copyright'>
                <div className='footer-content row inner'>
                    <div className='col-sm-6'>
                        <p>&copy; {props.siteConfig.copyright}</p>
                    </div>
                    <div className='col-sm-6'>
                        <p style={{float: 'right'}}><Link to={'/legal/privacy-policy'}>Privacy Policy</Link></p>
                        <p style={{float: 'right'}}><Link to={'/legal/terms-and-conditions'}>Terms and Conditions</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}