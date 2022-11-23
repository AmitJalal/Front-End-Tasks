import React, { useState, useEffect } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Items from "./components/Items";

const ShopingList = () => {
  const [items, setItems] = useState([
    { itemName: "item 1", quantity: 1, isSelected: false },
    { itemName: "item 2", quantity: 3, isSelected: true },
    { itemName: "item 3", quantity: 2, isSelected: false },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [totalItemCount, setTotalItemCount] = useState(6);

  const handleAddButtonClick = () => {
    if (inputValue === "") {
      alert("Please Add Shopping List");
      return;
    }
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue("");
    calculateTotal();
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    calculateTotal();
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
    calculateTotal();
  };

  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <div className="app-background">
        <h2 style={{color: "grey"}}>Shopping List</h2>
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClick()}
          />
        </div>
        <Items
          items={items}
          handleQuantityIncrease={handleQuantityIncrease}
          handleQuantityDecrease={handleQuantityDecrease}
          toggleComplete={toggleComplete}
        />
        <div className="total">Total: {totalItemCount}</div>
      </div>
    </div>
  );
};

export default ShopingList;
