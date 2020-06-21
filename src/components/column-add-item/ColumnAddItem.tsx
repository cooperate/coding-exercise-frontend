import React from "react";
import Button from "../button/Button";

const ColumnAddItem = (props: any) => {
  const { createItem, itemProperties } = props;
  const handleAddItem = () => {
    createItem(itemProperties);
  };

  return <Button color="primary" title="Add Item" onClick={handleAddItem} />;
};

export default ColumnAddItem;
