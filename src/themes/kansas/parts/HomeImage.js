export default function HomeImage(props) {
    return (
        <img
            src={`/images/${props.siteConfig.site}/shopping-bags.png`}
            alt={`${props.siteConfig.siteName}`}
            className='col-md-6 col-sm-12 col-xs-12'
            style={{
                display: 'block',
                margin: '0 auto'
            }} />
    )
}