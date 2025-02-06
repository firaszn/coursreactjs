import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Event = ({ event, onBook, onLike }) => {
  const [liked, setLiked] = useState(event.like);

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
<Card.Img variant="top" src={event.img } />
<Card.Body>

        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>Price: ${event.price}</Card.Text>
        <Card.Text>Tickets Left: {event.nbTickets}</Card.Text>
        <Card.Text>Participants: {event.nbParticipants}</Card.Text>
        <Button
          variant="primary"
          onClick={() => onBook(event)}
          disabled={event.nbTickets === 0}
        >
          {event.nbTickets === 0 ? "Sold Out" : "Book an Event"}
        </Button>
        <Button
          variant={liked ? "danger" : "success"}
          onClick={() => {
            setLiked(!liked);
            onLike(event.id);
          }}
          style={{ marginLeft: "100px" }}
        >
          {liked ? "Dislike" : "Like"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Event;
