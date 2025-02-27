import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById, editEvent } from "../services/api";
import { z } from "zod";

const eventSchema = z.object({
  name: z.string().min(3, "Le nom doit avoir au moins 3 caractères"),
  price: z.number().min(1).max(1000, "Le prix doit être entre 1 et 1000"),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  nbTickets: z.number().min(1).max(100, "Les tickets doivent être entre 1 et 100"),
  nbParticipants: z.number().min(1, "Le nombre de participants doit être au moins 1"),
  img: z.string().url("L'URL de l'image est invalide"),
});

const UpdateEvent = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getEventById(eventId);
        const event = response.data;
        setValue("name", event.name);
        setValue("price", event.price);
        setValue("description", event.description);
        setValue("nbTickets", event.nbTickets);
        setValue("img", event.img);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'événement :", error);
        navigate("/events");
      }
    };

    fetchEvent();
  }, [eventId, setValue, navigate]);

  const onSubmit = async (data) => {
    await editEvent(eventId, data);
    navigate("/events");
  };

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Modifier l'Événement</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Nom" {...register("name")} />
        <p>{errors.name?.message}</p>

        <input type="number" placeholder="Prix" {...register("price", { valueAsNumber: true })} />
        <p>{errors.price?.message}</p>

        <textarea placeholder="Description" {...register("description")} />
        <p>{errors.description?.message}</p>

        <input type="number" placeholder="Tickets disponibles" {...register("nbTickets", { valueAsNumber: true })} />
        <p>{errors.nbTickets?.message}</p>
        <input type="number" placeholder="Nombre de participants" {...register("nbParticipants", { valueAsNumber: true })} />
        <p>{errors.nbParticipants?.message}</p>
        <input type="text" placeholder="Image URL" {...register("img")} />
        <p>{errors.img?.message}</p>

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
};

export default UpdateEvent;
