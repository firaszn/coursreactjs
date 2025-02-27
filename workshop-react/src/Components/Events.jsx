import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Event from "./Event.jsx";
import { getAllEvents } from "../services/api";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await getAllEvents();
    setEvents(response.data);
  };

  return (
    <Container>
      <Row>
        {events.map((event) => (
          <Col key={event.id}>
            <Event event={event} />
            <Link to={`/events/${event.id}`}>Voir les détails</Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
