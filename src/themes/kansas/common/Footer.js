import { Link } from "react-router-dom"
import { isMobile } from 'react-device-detect'

export default function Footer(props) {
    return(
        <footer>
            <div className='outer copyright'>
                <div className='footer-content row inner'>
                    <div className='col-md-3 col-sm-12' style={{
                        paddingTop: '0',
                    }}>
                        <h5 style={{
                            color: '#fff'
                        }}>Our Address</h5>
                        <p>22 Canal Boulevard<br/>Camden, London<br/>NW1 9AQ</p>
                    </div>
                    <div className='col-md-3 col-sm-12' style={{
                        paddingTop: '0',
                    }}>
                        <p style={isMobile ? {
                            display: 'block',
                            marginTop: '25px'
                        } : {
                            display: 'block'
                        }}><Link to={'/legal/privacy-policy'}>Privacy Policy</Link></p>
                        <p style={{display: 'block'}}><Link to={'/legal/terms-and-conditions'}>Terms and Conditions</Link></p>
                        <p style={{display: 'block'}}><Link to={'/legal/returns-policy'}>Returns Policy</Link></p>
                    </div>
                </div>
            </div>
            <div className='outer copyright light'>
                <div className='footer-content row inner'>
                    <div className='col-12'>
                        <p>&copy; {props.siteConfig.copyright}</p>  
                    </div>
                </div>
            </div>
        </footer>
    )
}