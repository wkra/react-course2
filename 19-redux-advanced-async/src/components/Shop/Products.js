import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        name: 'My first Book',
        description: 'My first book description'
    },
    {
        id: 'p2',
        price: 5,
        name: 'My second Book',
        description: 'My second book description'
    }
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map(item => (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
