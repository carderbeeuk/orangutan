import React, { Fragment, useEffect } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

export default function TermsAndConditions(props) {
    useEffect(() => {
        document.title = props.siteConfig.siteName + ' | Terms And Conditions'
    }, [])

    return(
        <Fragment>
            <Header {...props} />
            <div className='outer'>
                <div className='inner-centered'>
                    <h1>Terms of Use</h1>

                    <p>Before using this web site please read the terms of use set forth
                        below. By using this web site you agree to be bound by these terms of use.
                        {props.siteConfig.domain} and their affiliates reserve the right to revise the
                        terms of use at any time without notice and, by using this site subsequent
                        to the revision of the terms of use, you agree to be bound by such
                        changes. If you find the terms of use to be unacceptable, you must
                        immediately terminate your use of this web site.
                    </p>

                    <h2>1. No Representation or Warranty</h2>

                    <p>1.1 The documents, graphics and images published at this Web Site could
                        include inaccuracies or typographical errors. Additionally, we reserve the
                        right to modify or terminate, at any time, for any reason, the
                        {props.siteConfig.domain} service and the information contained in this Web Site,
                        without notice, without liability to you, any other user or any third
                        party. We reserve the right to modify these Terms of Use and the Privacy
                        Policy at any time without notice. We make no commitment to update the
                        information contained in this Web Site. Consequently TO THE EXTENT
                        PERMITTED BY LAW, INFORMATION ON THIS WEB SITE IS PROVIDED "AS IS" WITHOUT
                        WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
                        LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                        PARTICULAR PURPOSE, OR NON-INFRINGEMENT. {props.siteConfig.domain} DISCLAIMS ANY
                        WARRANTIES REGARDING THE SECURITY, RELIABILITY, TIMELINESS AND PERFORMANCE
                        OF THIS SERVICE. {props.siteConfig.domain} DISCLAIMS ANY WARRANTIES FOR ANY
                        INFORMATION OR ADVICE OBTAINED THROUGH THIS SERVICE. YOU UNDERSTAND THAT
                        YOU USE {props.siteConfig.domain} AT YOUR OWN DISCRETION AND RISK.
                    </p>

                    <p>1.2 This site may contain links to other Web Sites which are completely
                        independent of this Web Site. We make no representation or warranty as to
                        the accuracy, completeness, reliability, legality, availability or
                        authenticity of the information or opinions contained in any such linked
                        Web Site, and any link to another Web Site shall not in any manner be
                        construed as an endorsement by us of that Web Site, or of the products or
                        services described therein. Furthermore, you understand that a search
                        using {props.siteConfig.domain} may produce search results and links to sites that
                        some people find objectionable, inappropriate, or offensive.
                        {props.siteConfig.domain} will not be liable to you in any circumstances for any
                        goods, services or content that you acquire or access on a third party
                        site, nor for any circumstances relating directly or indirectly to any
                        action or inaction that you take based on material on the
                        {props.siteConfig.domain} site.
                    </p>

                    <p>1.3 Users of this Web Site should not rely upon opinions expressed at
                        this Web Site when making business, medical, legal, financial, personal or
                        other decisions. Additionally, we do not endorse the opinions of third
                        parties expressed on linked Web Sites and none of the material on
                        {props.siteConfig.domain} is intended to constitute professional advice, whether
                        business, medical, legal, financial, personal or other, nor is it intended
                        to replace consultation with appropriately qualified business, medical,
                        legal, financial, personal or other practitioners.
                    </p>

                    <p>1.4 You understand further that the Internet contains unedited
                        materials some of which are sexually explicit and may be offensive to you.
                        You access this material at your own risk inasmuch as {props.siteConfig.domain}
                        has no control over and accepts no responsibility whatsoever for such
                        materials.
                    </p>

                    <h2>2. Confidentiality</h2>

                    <p>Your confidential use of this site cannot be guaranteed by us. We shall
                        not be responsible for any harm that you or any person may suffer as a
                        result of a breach of confidentiality in respect to your use of this
                        site.
                    </p>

                    <h2>3. Limitation of Damages</h2>

                    <p>3.1 in no event will we, our officers, employees, contractors,
                        subcontractors, suppliers, agents, affiliates, subsidiaries, successors or
                        assigns be liable to any party for any direct, indirect, or other
                        consequential loss for any use of this web site, or use of any other
                        linked website, even if we are expressly advised of the possibility of
                        such loss. The term "loss" includes, without limitation, legal fees, any
                        lost profits, business interruption and loss of programs or other data on
                        your information handling system.
                    </p>

                    <p>Furthermore, under no circumstances will {props.siteConfig.domain}, our
                        officers, employees, contractors, subcontractors, suppliers, agents,
                        affiliates, subsidiaries, successors or assigns be held liable for any
                        interruption of service resulting directly or indirectly from acts of
                        nature or causes beyond its reasonable control, this includes, without
                        limitation, government actions, war, civil disturbances, fires, floods,
                        storms or acts of terrorism.
                    </p>

                    <h2>4. Ownership</h2>

                    <p>All right, title and interest (including all copyrights, trademarks and
                        other intellectual property rights) in this Web Site belong to us. In
                        addition, the names, images and other indicia identifying our products and
                        services are our proprietary marks. All copyrights, trademarks and other
                        intellectual property rights referred to in this Web Site belong to their
                        respective owners.
                    </p>

                    <h2>5. License</h2>

                    <p>5.1 Except as expressly provided in clause 5.2, nothing contained in
                        this Web Site shall be construed as conferring any license or right,
                        expressly, by implication or otherwise, under any of our intellectual
                        property rights, or under any third party's intellectual property rights,
                        and no part of this Web Site may be reproduced, republished, copied,
                        transmitted, or distributed in any form or by any means.
                    </p>

                    <p>5.2 You are hereby granted a nonexclusive, non-transferable, limited
                        license to view, reproduce, print, and distribute materials retrieved from
                        this Web Site provided (a) such materials are used only for informational,
                        non-commercial purposes, and (b) you do not remove or obscure the
                        copyright notice or other notices.
                    </p>

                    <h2>6. Linking to this Web Site</h2>

                    <p>6.1 You may provide links to this Web Site provided (a) you do not
                        remove or obscure the copyright notice, or other notices on this Web Site,
                        (b) you discontinue providing a link to this Site if instructed to do so
                        by us.
                    </p>

                    <p>6.2 You may not query or use this site through the use of any automated
                        system without the express permission, in advance, of {props.siteConfig.domain}.
                    </p>

                    <h2>7. Governing Laws in Case of Dispute</h2>

                    <p>7.1 These Terms of Use shall be governed by and construed in accordance
                        with the laws of the United States as they apply to agreements made
                        and solely performed therein. All disputes arising from these Terms of Use
                        shall be exclusively subject to the jurisdiction of the United States.
                    </p>

                    <p>7.2 You agree to comply with all applicable laws regarding the use of
                        this Web Site.
                    </p>

                    <h2>8. Severability</h2>

                    <p>8.1 These Terms of Use incorporate by reference any notices contained
                        on this Web Site and constitute the entire agreement with respect to your
                        access to and use of this Web Site. Any provision of these Terms of Use
                        which is determined by a court of competent jurisdiction to be
                        unenforceable in any jurisdiction shall be severable from these Terms of
                        Use in that jurisdiction without in any way invalidating the remaining
                        provisions of these Terms of Use. The unenforceability of any provision in
                        a given jurisdiction shall not make that provision unenforceable in any
                        other jurisdiction.
                    </p>
                </div>
            </div>
            <Footer {...props} />
        </Fragment>
    )
}