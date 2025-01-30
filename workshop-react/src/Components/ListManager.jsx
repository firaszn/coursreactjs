import { useState } from "react";

const ListManager = ({ initialItems = [], placeholder = "Ajouter un élément" }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div>
      <h2>Liste d'éléments</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={addItem}>Ajouter</button>
    </div>
  );
};

export default ListManager;
