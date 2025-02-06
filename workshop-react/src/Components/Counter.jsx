import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = ({ initialCount = 0, step = 1 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <Card className="text-center p-4 shadow-sm">
      <Card.Body>
        <Card.Title className="fs-1 fw-bold">Compteur : {count}</Card.Title>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <Button variant="primary" onClick={() => setCount(count + step)}>+</Button>
          <Button variant="primary" onClick={() => setCount(count - step)}>-</Button>
          <Button variant="danger" onClick={() => setCount(initialCount)}>Reset</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Counter;
