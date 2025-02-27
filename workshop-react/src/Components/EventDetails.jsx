import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../services/api";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await getEventById(eventId);
      setEvent(response.data);
    } catch (error) {
      setEvent(null);
    }
  };

  if (!event) {
    return <h2>Événement introuvable</h2>;
  }

  return (
    <div>
      <h2>Détails de {event.name}</h2>
      <img src={event.img} alt={event.name} style={{ width: "300px" }} />
      <p>{event.description}</p>
      <p>Prix : ${event.price}</p>
      <p>Tickets Restants : {event.nbTickets}</p>
      <p>Participants : {event.nbParticipants}</p>
    </div>
  );
};

export default EventDetails;
