import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getNoteById();
  }, []);

  const getNoteById = async () => {
    try {
      const response = await axios.get(`https://backend-notes-559917148272.us-central1.run.app/notes/${id}`);
      setTitle(response.data.title);
      setContent(response.data.content);
    } catch (error) {
      console.error("Error fetching note:", error.response ? error.response.data : error.message);
    }
  };

  const updateNote = async (e) => {
    e.preventDefault();
    console.log("Updating note with ID:", id);
    console.log("Title:", title);
    console.log("Content:", content);
    try {
      const response = await axios.patch(
        `https://backend-notes-559917148272.us-central1.run.app/update-notes/${id}`, 
        { title, content }
      );
      console.log("Response from server:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error updating note:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2 className="title">Edit Note</h2>
      <form onSubmit={updateNote}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              required
            />
          </div>
        </div>
        <button type="submit" className="button is-success">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditNote;
