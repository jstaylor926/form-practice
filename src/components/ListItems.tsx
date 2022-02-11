import * as React from "react";
import Item from "./Item";

interface ListItemsProps {
  list: any;
  onRemoveItem: any;
}

const ListItems = ({ list, onRemoveItem }: ListItemsProps) => {
  return (
    <ul>
      {list.map((item: any) => (
        <Item item={item} onRemoveItem={onRemoveItem} key={item.objectID} />
      ))}
    </ul>
  );
};

export default ListItems;