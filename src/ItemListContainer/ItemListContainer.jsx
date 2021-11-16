import Item from "../Item/Item";
import "./ItemListContainer.css";

export function ItemListaContainer (props) {



  return(
    <div className="item-list-container">
      <h3>{props.greeting}</h3>
      <Item name="Stag" price="150" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKLu3ajDUtX85RCUd5UFSjKt9bAwaKtWYBpkWZMAY3rw96naiczBkEkcw-uTaq2TPsu8&usqp=CAU  "  />
      <Item name="Nordic" price="150" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBnMwdlvJ3fJc7TTs5RDnEjQ2Odx_FkXReSyWwfU6F0Y3nOvwPbwc-R0eOqBgc8YXHvE&usqp=CAU"/>
      <Item name="Valhalla" price="150" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShp4MFU9TAK959_0YuASgi1R3NCCFdq_WoQeVjepnTOuV9s5S0r7gS9Y5TqbVhCOzppDY&usqp=CAU" />
     
    </div>
  )
}

export default ItemListaContainer;