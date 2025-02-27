import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../services/api";
import { z } from "zod";

const eventSchema = z.object({
  name: z.string().min(3, "Le nom doit avoir au moins 3 caractères"),
  price: z.number().min(1).max(1000, "Le prix doit être entre 1 et 1000"),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  nbTickets: z.number().min(1).max(100, "Les tickets doivent être entre 1 et 100"),
  nbParticipants: z.number().min(1, "Le nombre de participants doit être au moins 1"),
});

const AddEvent = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    if (!imageBase64) {
      alert("Veuillez sélectionner une image.");
      return;
    }

    const newEvent = { ...data, img: imageBase64 };
    await addEvent(newEvent);
    navigate("/events");
  };

  return (
    <div>
      <h2>Ajouter un Événement</h2>
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

        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && <img src={imagePreview} alt="Aperçu" width="150" />}

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddEvent;
