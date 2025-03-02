import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "bulma/css/bulma.min.css";
import NotesList from "./pages/NotesList";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <h1 className="title has-text-centered">Notes App</h1>
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
