import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const saveNote = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-notes-559917148272.us-central1.run.app/add-notes", {
        title,
        content,
      });
      navigate("/");
    } catch (error) {
      setError("Failed to save note. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Add Note</h2>
      {error && <p className="has-text-danger">{error}</p>}
      <form onSubmit={saveNote}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title"
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Content</label>
          <div className="control">
            <textarea
              className="textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter note content"
              required
            ></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-success">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
