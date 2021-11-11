import React, { Fragment, useEffect } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

export default function PrivacyPolicy(props) {
    useEffect(() => {
        document.title = props.siteConfig.siteName + ' | Privacy Policy'
    }, [])

    return(
        <Fragment>
            <Header {...props} />
            <div className='outer'>
                <div className='inner-centered'>
                    <h1>Privacy Policy</h1>

                    <h2>Who are we?</h2>
                    <p>{props.siteConfig.siteName} is owned by Target Visibility FZ LLE, P.O. Box 4422 - Fujairah - UAE who acts as data controller.</p>

                    <h2>What information do we collect?</h2>
                    <h3>Personably Identifiable Information</h3>
                    <p>We do not collect any Personal Identification Information other than your IP address, which is automatically sent to us by your browser and is required to deliver the site's content.</p>
                    <h3>Non-Personably Identifiable Information</h3>
                    <p>Every time this website and its contents are accessed, we automatically receive some Non-Personally Identifiable Information from your browser such as:</p>
                    <ul>
                        <li>The resource you requested.</li>
                        <li>Date and time of access.</li>
                        <li>Browser type.</li>
                        <li>Operating system.</li>
                        <li>The website which directed you to this website.</li>
                    </ul>
                    <p>This data is stored locally in logfiles in the server that may not be in your country. We keep the data for up to 180 days for security purposes. We do not have the means to use any data collected to identify individuals. We do not consolidate this data with other sources of data.</p>


                    <h2>What do we share?</h2>
                    <h3>Oath</h3>
                    <p>We share the following Non-Personally Identifiable Information with Oath:</p>
                    <ul>
                        <li>Your IP address.</li>
                        <li>Browser type.</li>
                        <li>The page being accessed.</li>
                    </ul>
                    <p>This enables them to provide contextual ads.</p>
                    <p>
                        You can find their privacy policy here: <a href="https://policies.oath.com/in/en/oath/privacy/index.html">https://policies.oath.com/in/en/oath/privacy/index.html</a><br/>
                        You can access their privacy controls here: <a href="https://policies.oath.com/in/en/oath/privacy/index.html">https://policies.oath.com/in/en/oath/privacy/index.html</a>
                    </p>

                    <h2>Cookies</h2>
                    <h3>First Party Cookies</h3>
                    <p>Cookies are small pieces of data sent from a website and stored on the user's computer by the web browser. {props.siteConfig.siteName} uses cookies to remember user's preferences, to understand how users interact with our service and for generic web traffic statistics.</p>
                    <p>{props.siteConfig.siteName}'s first party cookies should expire within 24 hours.</p>
                    <p>While most internet browsers automatically accept cookies, you can instruct your browser to prompt you before accepting, or automatically refuse. This can usually be found in preferences or security settings. However, instructing your browser to do so may prevent you from accessing specific site functionality.</p>
                    <p>More information about web cookies can be found on: <a href="https://www.aboutcookies.org/">https://www.aboutcookies.org/</a></p>
                    <h3>Third Party Cookies</h3>
                    <p>{props.siteConfig.siteName} utilises a number of third party platforms, some of which require the setting of cookies by the third-party. This is for one of two reasons, to provide statistics or to enable a personalized advertising experience.</p>
                    <p>Whilst we don't have access to these third party cookies, those cookies set to enable personalized advertising do enable us to show ads to you across the internet based on your interactions with the third party platform, such as Google, Bing or Facebook. Niether {props.siteConfig.siteName} nor the third parties are collecting any personally identifiable information.</p>

                    <p>Here are links to the third parties for more information on them and their cookie policies:</p>

                    <h4>Google Analytics</h4>
                    <p>Policy link: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></p>
                    <p>Personalized Ad Settings link: <a href="http://www.google.com/settings/ads">http://www.google.com/settings/ads</a></p>
                    <p>Personalized Ad Opt-out link: <a href="https://tools.google.com/dlpage/gaoptout?hl=en">https://tools.google.com/dlpage/gaoptout?hl=en</a></p>

                    <h4>Bing</h4>
                    <p>Policy link: <a href="https://privacy.microsoft.com/en-us/privacystatement">https://privacy.microsoft.com/en-us/privacystatement</a></p>
                    <p>Personalized Ad Settings link: <a href="https://go.microsoft.com/fwlink/?linkid=286759">https://go.microsoft.com/fwlink/?linkid=286759</a></p>

                    <h4>Facebook</h4>
                    <p>Policy link: <a href="https://www.facebook.com/about/privacy/update">https://www.facebook.com/about/privacy/update</a></p>
                    <p>Personalized Ad Settings link: <a href="https://www.facebook.com/ads/preferences/">https://www.facebook.com/ads/preferences/</a></p>

                    <h4>Outbrain</h4>
                    <p>Policy link: <a href="https://www.outbrain.com/legal/privacy">https://www.outbrain.com/legal/privacy</a></p>
                    <p>Personalized Ad Settings link: <a href="https://my.outbrain.com/recommendations-settings/home">https://my.outbrain.com/recommendations-settings/home</a></p>

                    <h4>Taboola</h4>
                    <p>Policy link: <a href="https://www.taboola.com/privacy-policy">https://www.taboola.com/privacy-policy</a></p>
                    <p>Personalized Ad Opt-out link: <a href="https://www.taboola.com/privacy-policy#user-choices-and-optout">https://www.taboola.com/privacy-policy#user-choices-and-optout</a></p>

                    <p>Other embedded content may set third party for their own statistics/analytics.</p>

                    <p>You can find out more at how to control personalized ads below:</p>
                    <p>US users can visit the DAA consumer choice page at: <a href="www.aboutads.info/choices">www.aboutads.info/choices</a></p>
                    <p>Canadian users can visit the DAAC consumer choice page at: <a href="www.youradchoices.ca/choices">www.youradchoices.ca/choices</a></p>
                    <p>European users can visit the EDAA consumer choice page at: <a href="www.youronlinechoices.eu">www.youronlinechoices.eu</a></p>

                    <h3>Opt-Out/In</h3>

                    <p>You can opt-out of the saving third party cookies on {props.siteConfig.siteName} by clicking '<a href="#" class="refuseCookies">I refuse</a>'.</p>
                    <p>Alternatively, you can opt-in to the saving of third party cookies on {props.siteConfig.siteName} by clicking '<a href="#" class="allowCookies">I accept</a>'.</p>

                    <h2>Links to other websites</h2>
                    <p>We may present links in such a way that will allow us to track whether these links have been followed. This information is used to improve our search engine, content and advertising.</p>

                    <h2>Security</h2>
                    <p>We have in place a variety of physical, electronic, and managerial procedures to secure any information we collect following best-practices.</p>

                    <h2>Acceptance of these terms</h2>
                    <p>By using the {props.siteConfig.siteName} site, you implicitly accept the terms of this policy. Your continued use of the site following changes to this policy will be deemed as your acceptance of those changes.</p>

                    <h2>Contact</h2>
                    <p>Should you have any queries regarding the above policy, please email us at <a href={`mailto:contact@${props.siteConfig.domain}`}>contact@{props.siteConfig.domain}</a></p>
                </div>
            </div>
            <Footer {...props} />
        </Fragment>
    )
}