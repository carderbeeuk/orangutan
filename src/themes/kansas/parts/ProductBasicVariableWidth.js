import { Fragment } from "react";

export default function ProductBasicVariableWidth(props) {
    return(
        <div key={props.idx} className='col-xs-6 product basic'>
            <div className='product-inner'>
                <a href={props.offer.product._source.click_out_url}>
                    <div title={props.offer.product._source.title} className='image' style={{
                        background: `url(${props.offer.product._source.image_large})`
                    }}></div>
                </a>
                <div className='product-text'>
                    <a href={props.offer.product._source.click_out_url}>
                        <h5 className='d-none d-md-block' title={props.offer.product._source.title}>{props.offer.product._source.title}</h5>
                        <h6 className='d-md-none' title={props.offer.product._source.title}>{props.offer.product._source.title}</h6>
                    </a>
                        <hr/>
                        <p className='price'>
                            {new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(props.offer.product._source.price)}
                        </p>
                        <p className='merchant' style={{
                            paddingBottom: '10px'
                        }}>{props.offer.product._source.merchant}</p>
                        <p className='price'>
                            <span className={
                                parseFloat(props.offer.product._source.delivery_cost) === 0 ? 'shipping free' : 'shipping'
                            }><i className="fas fa-truck"></i> free delivery
                            </span>
                        </p>
                    {/* <a href='/shopping/product/codehere'>
                        {props.offer.offer_count > 1 ? <Fragment><hr/><p className='compare-link'>Compare from {props.offer.offer_count} offers</p></Fragment> : null}
                    </a> */}
                </div>
            </div>
        </div>
    )
}