import React, { useState } from "react";

// Définition du hook personnalisé
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

// Composant Counter qui utilise le hook
function Counter() {
  const { count, increment, decrement } = useCounter(5);

  return (
    <div>
      <p>Valeur du compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
}

export default Counter;
