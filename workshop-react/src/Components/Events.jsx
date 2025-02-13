import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Event from "./Event";
import eventsData from "../events.json";

const Events = () => {
  const [events, setEvents] = useState(eventsData);

  const bookEvent = (eventToBook) => {
    setEvents(
      events.map((event) =>
        event.id === eventToBook.id && event.nbTickets > 0
          ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
          : event
      )
    );
    alert("You have booked an event!");
  };

  const toggleLike = (id) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, like: !event.like } : event
      )
    );
  };

  return (
    <Container>
      <Row>
        {events.map((event) => (
          <Col key={event.id} >
            <Event event={event} onBook={bookEvent} onLike={toggleLike} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
