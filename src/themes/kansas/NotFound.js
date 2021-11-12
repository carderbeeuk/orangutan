import Header from './common/Header'
import Footer from './common/Footer'
import { Fragment } from 'react'

export default function NotFound(props) {
    return(
        <Fragment>
            <Header {...props} />
            <div className='outer' style={{
                margin: 0,
                minHeight: 'calc(100vh - 200px)'
            }}>
                <div className='inner-centered' style={{
                    maxWidth: '600px'
                }}>
                    <img
                        src={`/images/${props.siteConfig.site}/404_not_found.png`}
                        alt={`${props.siteConfig.siteName}`}
                        className='col-12'
                        style={{
                            display: 'block',
                            margin: '0 auto'
                        }} />
                </div>
            </div>
            <Footer {...props} />
        </Fragment>
    )
}