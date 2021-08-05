/* ---------------------------- imports --------------------------- */
// style
import styled from 'styled-components';

/* ----------------------- styled-component ----------------------- */
const WantedItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 2px;
  width: 250px;
  height: 120px;
  border-radius: 8px;
  border: 0.5px solid lightgray;
`;
const WantedItemImg = styled.div`
  width: 90px;
  height: 110px;
  border-radius: 8px;
  background-color: ${(props) => props.color || 'palevioletred'};
  margin: auto;
`;
const WantedItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
const RemoveButton = styled.button``;
/* --------------------------- component -------------------------- */
function CartItem({ item, addItem, removeItem }) {
  function handleChange(event, item) {
    if (event.target.value > item.quantity) {
      addItem(item);
    } else {
      removeItem(item);
    }
  }
  return (
    <WantedItem>
      <WantedItemImg color={item.name} />
      <WantedItemInfo>
        <p>{item.name}</p>
        <input
          type="number"
          min="1"
          max="99"
          value={item.quantity}
          onChange={(e) => handleChange(e, item)}
        />
        <RemoveButton onClick={() => removeItem(item)}>
          Remove Item
        </RemoveButton>
      </WantedItemInfo>
    </WantedItem>
  );
}

export default CartItem;
