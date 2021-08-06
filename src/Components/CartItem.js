/* ---------------------------- imports --------------------------- */
// style
import styled from 'styled-components';
import { PlusCircle, MinusCircle } from 'styled-icons/boxicons-solid';

/* ----------------------- styled-component ----------------------- */
const ItemCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 2px;
  width: 250px;
  height: 120px;
  border-bottom: 1px solid #c3c3c3;
`;
const ItemImage = styled.div`
  width: 90px;
  height: 110px;
  border-radius: 8px;
  background-color: ${(props) => props.color || 'palevioletred'};
  margin: auto;
`;
const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  & > p {
    margin: 0;
  }
`;
const Counter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: center;
  align-items: center;

  & > input {
    margin: 0 8px;
    padding: 4px 6px;
    border: 2px solid var(--black);
    border-radius: 3px;
    text-align: center;
  }
`;
const ControlButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  & > svg {
    width: 20px;
    height: 20px;
    transition: 0.2s;
    color: ${(props) => (props.enabled ? 'var(--black)' : '#c3c3c3')};
    &:active {
      color: ${(props) => (props.enabled ? '#666' : '#aaa')};
    }
  }
`;
const PlusIcon = styled(PlusCircle)``;
const MinusIcon = styled(MinusCircle)``;
const RemoveButton = styled.button``;
/* --------------------------- component -------------------------- */
function CartItem({ item, addItem, removeItem }) {
  function handleChange(event, item) {
    // console.log(event)
    // event.nativeEvent.data
    if (event.target.value > item.quantity) {
      addItem(item);
    } else {
      removeItem(item);
    }
  }
  return (
    <ItemCard>
      <ItemImage color={item.name} />
      <ItemDetails>
        <p>{item.name}</p>
        <Counter>
          <ControlButton enabled={item.quantity > 1}>
            <MinusIcon onClick={() => item.quantity > 1 && removeItem(item)} />
          </ControlButton>
          <input
            type="number"
            min="1"
            max="99"
            value={item.quantity}
            onChange={(e) => handleChange(e, item)}
          />
          <ControlButton enabled={item.quantity < 99}>
            <PlusIcon onClick={() => item.quantity <= 99 && addItem(item)} />
          </ControlButton>
        </Counter>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
        <RemoveButton onClick={() => removeItem(item)}>
          Remove Item
        </RemoveButton>
      </ItemDetails>
    </ItemCard>
  );
}

export default CartItem;
