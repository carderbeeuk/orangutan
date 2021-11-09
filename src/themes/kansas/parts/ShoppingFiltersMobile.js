import { useState, useEffect } from "react"
import queryString from 'query-string'

export default function ShoppingFiltersMobile(props) {
    const [activeFilters, setActiveFilters] = useState([])
    const [filters, setFilters] = useState([
        {
            'label': 'Up to £30',
            'functions': {
                'min_price': 0,
                'max_price': 30
            },
            'category': 'price',
            'unique_id': 'up_to_30',
        },
        {
            'label': '£30 to £100',
            'functions': {
                'min_price': 30,
                'max_price': 100
            },
            'category': 'price',
            'unique_id': '30_to_100',
        },
        {
            'label': '£100 to £400',
            'functions': {
                'min_price': 100,
                'max_price': 400
            },
            'category': 'price',
            'unique_id': '100_to_400',
        },
        {
            'label': 'Over £400',
            'functions': {
                'min_price': 400,
            },
            'category': 'price',
            'unique_id': 'over_400',
        },
        {
            'label': 'Price Low to High',
            'functions': {
                'sort': 'price_asc',
            },
            'category': 'sort',
            'unique_id': 'low_to_high',
        },
        {
            'label': 'Price High to Low',
            'functions': {
                'sort': 'price_desc',
            },
            'category': 'sort',
            'unique_id': 'high_to_low',
        },
    ])

    useEffect(() => {
        const { min_price, max_price, sort, brand } = queryString.parse(window.location.search)

        var filtersActive = []
        if(min_price === '0' && max_price === '30') {
            filtersActive.push('up_to_30')
        } else if(min_price === '30' && max_price === '100') {
            filtersActive.push('30_to_100')
        } else if(min_price === '100' && max_price === '400') {
            filtersActive.push('100_to_400')
        } else if(min_price === '400') {
            filtersActive.push('over_400')
        }

        if(sort === 'price_asc') {
            filtersActive.push('low_to_high')
        } else if(sort === 'price_desc') {
            filtersActive.push('high_to_low')
        }

        if(brand) {
            filtersActive.push(brand)
        }

        var brands = []
        props.offers.forEach(product => {
            product.offers.forEach(offer => {
                if(!brands.includes(offer._source.manufacturer) && offer._source.manufacturer) {
                    brands.push(offer._source.manufacturer);
                }
            })
        })

        var dynamicFilters = filters
        brands.forEach(brand => {
            dynamicFilters.push({
                'label': brand,
                'functions': {
                    'brand': brand,
                },
                'category': 'brand',
                'unique_id': brand
            })
        })

        setActiveFilters(filtersActive)
        setFilters(dynamicFilters)
        sortActiveFilters()
    }, [props])

    const applyFilter = (filter) => {
        if(filter.label === 'Clear Filters') {
            window.location = '/shopping/search/' + props.searchTerm
        }

        var existingParams = queryString.parse(window.location.search)

        for (const [key, value] of Object.entries(filter.functions)) {
            existingParams[key] = value
        }

        window.location.search = queryString.stringify(existingParams)
    }

    const sortActiveFilters = () => {
        var newActiveFilters = []
        var newInactiveFilters = []
        filters.map(filter => {
            if(activeFilters.includes(filter.unique_id)) {
                newActiveFilters.push(filter)
            } else {
                newInactiveFilters.push(filter)
            }
            return null
        })

        const sortedFilters = newActiveFilters.concat(newInactiveFilters)
        setFilters(sortedFilters)
    }

    return(
        <div className='inner filters-scrollable' style={{
            padding: '15px 5px',
        }}>
            {filters.map((filter, key) => {
                return(
                    <div key={key} className={activeFilters.includes(filter.unique_id) ? 'filter-small active' : 'filter-small'} onClick={() => applyFilter(filter)}>{filter.label}</div>
                )
            })}
            <div className='filter-small' onClick={() => {applyFilter({'label': 'Clear Filters'})}}>Clear All</div>
        </div>
    )
}