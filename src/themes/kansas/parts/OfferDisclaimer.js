export default function OfferDisclaimer(props) {
    return(
        <div>
            <p className='offer-disclaimer' style={props.centered ? {
                margin: '0 auto'
            } : null}>
                We update the list of products on this website in regular intervals multiple times per day, but sometimes this isn't possible. In these cases we may use an older feed until we can get new offers and products into our systems. This means that some of the products' availability and prices may become out of date. Please make sure to check the price and availability of offers on the sellers' websites. This website contains links to affiliate provided offers and products, so we may receive a commission for sales made on affiliate websites.
            </p>
        </div>
    )
}