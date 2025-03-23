import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await axios.get("https://backend-notes-559917148272.us-central1.run.app/notes");
      setNotes(response.data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch notes. Please try again.");
      console.error("Error fetching notes:", error);
    }
  };

  const deleteNote = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://backend-notes-559917148272.us-central1.run.app/delete-notes/${id}`);
      getNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
      setError("Failed to delete note. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="title has-text-centered">Notes List</h1>
      
      {error && <p className="has-text-danger">{error}</p>}

      <div className="mb-3">
        <Link to="/add" className="button is-primary">
          Add Note
        </Link>
      </div>

      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        <div className="columns is-multiline">
          {notes.map((note) => (
            <div key={note.id} className="column is-one-third">
              <div className="box">
                <h3 className="title is-5">{note.title}</h3>
                <p>{note.content}</p>
                <div className="buttons mt-2">
                  <Link to={`/edit/${note.id}`} className="button is-warning">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="button is-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
