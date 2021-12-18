/* ------------------------------ imports ------------------------------ */
// style
import styled from 'styled-components';
// components
import ItemCard from '../Components/ProductCard';
// data
import items from '../Items';

/* ----------------------------- component ----------------------------- */
function Products({ addItem }) {
  const products = items.map((item) => (
    <ItemCard item={item} addItem={addItem} price={item.price} key={item.id} />
  ));
  return <ShowCase>{products}</ShowCase>;
}

export default Products;

/* ---------------------------------- style --------------------------------- */
const ShowCase = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
`;
