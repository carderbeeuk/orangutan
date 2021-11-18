import { Fragment, useState, useLayoutEffect } from "react"
import queryString from 'query-string'

export default function ShoppingFilters(props) {
    const [filters, setFilters] = useState([])
    const [appliedFilters, setAppliedFilters] = useState({})
    const [minPrice, setMinPrice] = useState()
    const [maxPrice, setMaxPrice] = useState()

    const applyFilters = () => {
        const queryParams = queryString.parse(window.location.search)
        if(queryParams['min_price']) setMinPrice(queryParams['min_price'])
        if(queryParams['max_price']) setMaxPrice(queryParams['max_price'])
        setAppliedFilters(queryParams)
    }

    const getFilters = async (data) => {
        var brands = []
        var categories = []
        var delivery = [
            'Free delivery'
        ]

        data.forEach(product => {
            product.offers.forEach(offer => {
                if(!brands.includes(offer._source.manufacturer) && offer._source.manufacturer) {
                    brands.push(offer._source.manufacturer);
                }
                const categoryArr = offer._source.google_category_name.split(' > ')
                const category = categoryArr.slice(-1)[0]
                if(!categories.includes(category) && category) {
                    categories.push(category)
                }
            })
        })

        const filters = {
            category: categories,
            brand: brands,
            delivery: delivery,
        }

        setFilters(filters)
    }

    useLayoutEffect(() => {
        getFilters(props.offers)
        applyFilters()
    }, [props])

    const handleSort = (e) => {
        const filtersFound = appliedFilters
        filtersFound['sort'] = e.target.value
        setAppliedFilters(filtersFound)
        redirectWithFilters()
    }

    const handleFilterStandard = (e) => {
        const filtersFound = appliedFilters
        if(e.target.name in filtersFound) {
            delete filtersFound[e.target.name]
        } else {
            filtersFound[e.target.name] = e.target.value
        }
        setAppliedFilters(filtersFound)
        redirectWithFilters()
    }

    const redirectWithFilters = () => {
        const urlParams = Object.entries(appliedFilters).map(filter => {
            const value = encodeURIComponent(filter[1])
            return `${filter[0]}=${value}`
        })
        window.location.search = urlParams.join('&')
    }

    const filterIsActive = (key, value) => {
        var checked = false
        if(key in appliedFilters && appliedFilters[key] === value) checked = true
        return checked
    }

    const clearFilters = () => {
        window.location = '/shopping/search/' + props.searchTerm
    }

    const getCurrencySymbol = () => {
        var currncySymbol = '£'
        switch (props.siteConfig.currncy) {
            case 'USD':
                currncySymbol = '$'
                break;
            case 'EUR':
                currncySymbol = '€'
                break;

            default:
                break;
        }
        return currncySymbol
    }

    const updatePrices = (e) => {
        switch (e.target.id) {
            case 'minPrice':
                setMinPrice(e.target.value)
                break
        
            default:
                setMaxPrice(e.target.value)
        }
    }

    const renderPriceCheck = () => {
        var priceCheck = null
        if(minPrice > 0 || maxPrice > 0) {
            priceCheck = <i type='submit' onClick={applyPriceCheck} className="fas fa-check-circle price-check"></i>
        }
        return priceCheck
    }

    const applyPriceCheck = (e) => {
        e.preventDefault()
        const filtersFound = appliedFilters
        filtersFound['min_price'] = minPrice
        filtersFound['max_price'] = maxPrice
        setAppliedFilters(filtersFound)
        redirectWithFilters()
    }

    const renderClearFilters = () => {
        if(Object.keys(appliedFilters).length > 0) {
            return <div className="clear-filters"><span onClick={clearFilters}><i className="fas fa-times-circle"></i> Clear all filters</span></div>
        } else {
            return null
        }
    }

    return(
        <Fragment>
            {renderClearFilters()}
            <div>
                <div className='filter-block'>
                    <h6>Sort</h6>
                    <select className='sort-select' onChange={handleSort} value={appliedFilters['sort']} defaultValue='relevance'>
                        <option value="relevance">Relevance</option>
                        <option value="price_asc">Price - Low to High</option>
                        <option value="price_desc">Price - High to Low</option>
                    </select>
                </div>
                <div className='filter-block'>
                    <h6>Price</h6>
                    <input className='price-filter' id='minPrice' type='text' onChange={updatePrices} value={minPrice || ''} placeholder={`${getCurrencySymbol()} min`} />
                    <span style={{
                        display: 'inline-block',
                        marginRight: '5px'
                    }}>to</span>
                    <input className='price-filter' id='maxPrice' type='text' onChange={updatePrices} value={maxPrice || ''} placeholder={`${getCurrencySymbol()} max`} />
                    {renderPriceCheck()}
                </div>
                {Object.entries(filters).map((options, key) => {
                    return(
                        <div className='filter-block'>
                            <h6>{options[0]}</h6>
                            {options[1].map(function(option, key) {
                                return(
                                    <div key={key}>
                                        <input checked={filterIsActive(options[0], option)} onChange={handleFilterStandard} type='checkbox' id={option} name={options[0]} value={option} />
                                        <label style={{cursor: 'pointer'}} htmlFor={option}>{option}</label>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}