import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../styles/BugDetailsPage.css";

function BugDetailsPage() {
  const { id: bugId } = useParams();

  const navigate = useNavigate();

  const [bug, setBug] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]); 

   useEffect(() => {
    api
      .get(`/bugs/bug/${bugId}`)
      .then((res) => {
        setBug(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Bug not found or access denied");
        navigate("/dashboard");
      });
  }, [bugId, navigate]);

    const resolveBug = async () => {
    try {
      const res = await api.patch(`/bugs/${bugId}/status`, {
        status: "RESOLVED",
      });

      setBug(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Cannot resolve bug");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!bug) return <p className="bug-not-found">Bug not found</p>;
  

  return (
  <div className="bug-details-page">
    <div className="bug-card">
      <h1 className="bug-title">{bug.title}</h1>

      <p className="bug-description">
        {bug.description || "No description"}
      </p>

      <div className="bug-info">
        <span
          className={`badge severity ${bug.severity.toLowerCase()}`}
        >
          Severity: {bug.severity}
        </span>

        <span
          className={`badge priority ${bug.priority.toLowerCase()}`}
        >
          Priority: {bug.priority}
        </span>

        <span
          className={`badge status ${bug.status.toLowerCase()}`}
        >
          Status: {bug.status}
        </span>
      </div>

      <div className="bug-actions">
        <button
          className="back-btn"
           onClick={() => navigate(`/project/${bug.projectId}`)}
        >
          ← Back to Project
        </button>

        <button
          className="resolve-btn"
          onClick={resolveBug}
          disabled={bug.status === "RESOLVED"}
        >
          {bug.status === "RESOLVED" ? "Resolved" : "Resolve Bug"}
        </button>
      </div>
    </div>
  </div>
);

}

export default BugDetailsPage;
