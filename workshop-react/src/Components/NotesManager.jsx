import { useState } from "react";

const NotesManager = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote("");
    }
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const average = notes.length ? (notes.reduce((sum, n) => sum + n, 0) / notes.length).toFixed(2) : 0;

  return (
    <div>
      <h2>Gestionnaire de Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button style={{  background: "blue"}}  onClick={() => removeNote(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Ajouter une note"
      />
      <button onClick={addNote}>Ajouter</button>
      <p>Moyenne des notes : {average}</p>
    </div>
  );
};

export default NotesManager;
