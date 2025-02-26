import React from "react";
import { useParams } from "react-router-dom";
import eventsData from "../events.json";

const EventDetails = () => {
  const { eventId } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(eventId));

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
