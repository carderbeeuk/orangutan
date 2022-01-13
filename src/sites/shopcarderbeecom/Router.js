import React, { Fragment, Suspense, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import './scss/main.scss'
import ReturnsPolicy from '../../themes/kansas/ReturnsPolicy'

export default function Router(props) {
    const siteConfig = props.siteConfig
    const Home = React.lazy(() => import(`../../themes/${props.siteConfig.theme}/Home`))
    const ShoppingSearch = React.lazy(() => import(`../../themes/${props.siteConfig.theme}/ShoppingSearch`))
    const ShoppingSingle = React.lazy(() => import(`../../themes/${props.siteConfig.theme}/ShoppingSingle`))
    const ShoppingCategory = React.lazy(() => import(`../../themes/${props.siteConfig.theme}/ShoppingCategory`))
    const PrivacyPolicy = React.lazy(() => import(`../../themes/${props.siteConfig.theme}/PrivacyPolicy`))
    const TermsAndConditions = React.lazy(() => import(`../../themes/${props.siteConfig.theme}/TermsAndConditions`))
    const CookieDisclaimer = React.lazy(() => import(`../../themes/${props.siteConfig.theme}/parts/CookieDisclaimer`))
    const NotFound = React.lazy(() => import(`../../themes/${props.siteConfig.theme}/NotFound`))

    useEffect(() => {
        import (`../../themes/${siteConfig.theme}/scss/main.scss`)
        import ('./scss/main.scss')
    }, [siteConfig])

    return(
        <Fragment>
            <CookieDisclaimer {...props} />

            <Switch>

                {/* Home */}
                <Route exact path='/' render={
                    (props) => <Suspense fallback={null}>
                        <Home {...props} siteConfig={siteConfig} />
                    </Suspense>
                }></Route>

                {/* Shopping */}
                <Route exact path='/shopping/search/:searchTerm' render={
                    (props) => <Suspense fallback={null}>
                        <ShoppingSearch {...props} siteConfig={siteConfig} />
                    </Suspense>
                }></Route>
                <Route exact path='/shopping/product/:productUUID' render={
                    (props) => <Suspense fallback={null}>
                        <ShoppingSingle {...props} siteConfig={siteConfig} />
                    </Suspense>
                }></Route>
                <Route exact path='/shopping/category/:categoryId' render={
                    (props) => <Suspense fallback={null}>
                        <ShoppingCategory {...props} siteConfig={siteConfig} />
                    </Suspense>
                }></Route>

                {/* Legal */}
                <Route exact path='/legal/privacy-policy' render={
                    (props) => <Suspense fallback={null}>
                        <PrivacyPolicy {...props} siteConfig={siteConfig} />
                    </Suspense>
                }></Route>
                <Route exact path='/legal/terms-and-conditions' render={
                    (props) => <Suspense fallback={null}>
                        <TermsAndConditions {...props} siteConfig={siteConfig} />
                    </Suspense>
                }></Route>
                <Route exact path='/legal/returns-policy' render={
                    (props) => <Suspense fallback={null}>
                        <ReturnsPolicy {...props} siteConfig={siteConfig} />
                    </Suspense>
                }></Route>

                {/* not found */}
                <Route path='*' render={
                    (props) => <NotFound {...props} siteConfig={siteConfig} />
                }></Route>

            </Switch>
        </Fragment>
    )
}