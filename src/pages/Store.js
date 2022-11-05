import {Row, Col} from 'react-bootstrap';
import {productArray} from "../productStore";
import ProductCard from "../components/ProductCard";
const Store = () => {
    return (
        <>
            <h1 align={"center"} className={"p-3"}> Welcome to Evolve Luxury Fashion </h1>
            <Row xs={1} md={3} className={"g-4"}>
                {productArray.map(( product, index) => (
                    <Col align={"center"} key={index}>
                        <ProductCard product={product}></ProductCard> {/*First Product we are defining it so we can use it in the ProductCard.js and the second one is grabbing the map */}
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Store;