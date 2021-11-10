import CategorySection from './HomeCategories/CategorySection'

const categories = [
    {
        key: 'Clothing & Accessories',
        title: 'Clothing & Accessories',
        description: 'Shop clothing, shoes, and accessories for every occasion',
    },
    {
        key: 'Furniture',
        title: 'Furniture',
        description: 'Household furntiture from top brands',
    },
    {
        key: 'Electronics',
        title: 'Electronics',
        description: 'Discover our most popular electronics offers',
    },
    {
        key: 'Sporting Goods',
        title: 'Sports Equipment & Outdoor Gear',
        description: 'Explore our range of top-branded offers in Fitness, Camping, Hiking and much more',
    },
    {
        key: 'Baby & Toddler',
        title: 'Babies & Kids',
        description: 'Shop for children\'s products from our wide range of nursery products, toys, gifts and more'
    },
]

export default function HomeCategories(props) {
    return(
        categories.map((category, idx) => {
            return <CategorySection {...props} category={category} idx={idx} key={idx} />
        })
    )
}