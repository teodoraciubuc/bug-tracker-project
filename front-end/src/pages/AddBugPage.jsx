import { useState } from "react";
import {useParams} from "react-router-dom";
import "../styles/AddBugPage.css";

function AddBugPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("LOW");
  const [priority, setPriority] = useState("LOW");
  const { id } = useParams();


  return (
    <div className="add-bug-page">
      <h1 className="add-bug-title">Add Bug🐞</h1>

      <div className="add-bug-form">
        {/* TITLE */}
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* SEVERITY */}
        <div className="form-group">
          <label>Severity</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>

        {/* PRIORITY */}
        <div className="form-group">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>

        {/* SUBMIT (temporar fara backend) */}
        
          <button
            className="submit-bug-btn"

            onClick={() => {
            const newBug = {
            id: Date.now(),
            title,
            description,
            severity,
            priority,
            status: "Open",
            assignee: null,
          };


            const existingBugs =
              JSON.parse(localStorage.getItem(`project-${id}-bugs`)) || [];

            localStorage.setItem(
              `project-${id}-bugs`,
              JSON.stringify([...existingBugs, newBug])
            );

            window.location.href = `/project/${id}`;
          }}
        >
          Add Bug
        </button>
      </div>
    </div>
  );
}

export default AddBugPage;
