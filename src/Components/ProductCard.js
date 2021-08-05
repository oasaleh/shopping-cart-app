/* ------------------------------ imports ------------------------------ */
// style
import styled from 'styled-components';

/* ------------------------- styled-components ------------------------- */
const ProductCard = styled.div`
  width: 170px;
  height: 210px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  color: ${(props) => props.textColor || 'palevioletred'};
`;
const AddToCartButton = styled.button``;
/* ----------------------------- component ----------------------------- */
function ItemCard({ item, addItem }) {
  return (
    <ProductCard>
      <img src="" alt="productImg" />
      <Title textColor={item.name}>This is a product</Title>
      {/* why do I have to make it an anonymous function inside onClick? */}
      <AddToCartButton onClick={() => addItem({...item, quantity: 1})}>
        Add to Cart
      </AddToCartButton>
    </ProductCard>
  );
}

export default ItemCard;
