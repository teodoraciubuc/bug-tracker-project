import { useParams } from "react-router-dom";
import "../styles/BugDetailsPage.css";

function BugDetailsPage() {
  const { id: bugId } = useParams();

  let foundBug = null;
  let projectId = null;

  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("project-") && key.endsWith("-bugs")) {
      const bugs = JSON.parse(localStorage.getItem(key)) || [];

      bugs.forEach((bug) => {
        if (String(bug.id) === String(bugId)) {
          foundBug = bug;
          projectId = key.replace("project-", "").replace("-bugs", "");
        }
      });
    }
  });

  if (!foundBug) {
    return <p className="bug-not-found">Bug not found</p>;
  }

  return (
  <div className="bug-details-page">
    <div className="bug-card">
      <h1 className="bug-title">{foundBug.title}</h1>

      <p className="bug-description">
        {foundBug.description || "No description"}
      </p>

      <div className="bug-info">
        <span
          className={`badge severity ${foundBug.severity.toLowerCase()}`}
        >
          Severity: {foundBug.severity}
        </span>

        <span
          className={`badge priority ${foundBug.priority.toLowerCase()}`}
        >
          Priority: {foundBug.priority}
        </span>

        <span
          className={`badge status ${foundBug.status.toLowerCase()}`}
        >
          Status: {foundBug.status}
        </span>
      </div>

      <div className="bug-actions">
        <button
          className="back-btn"
          onClick={() => (window.location.href = `/project/${projectId}`)}
        >
          ← Back to Project
        </button>

        <button
          className="resolve-btn"
          onClick={() => {
            foundBug.status = "Resolved";

            const bugs = JSON.parse(
              localStorage.getItem(`project-${projectId}-bugs`)
            );

            localStorage.setItem(
              `project-${projectId}-bugs`,
              JSON.stringify(bugs)
            );

            window.location.reload();
          }}
          disabled={foundBug.status === "Resolved"}
        >
          {foundBug.status === "Resolved" ? "Resolved" : "Resolve Bug"}
        </button>
      </div>
    </div>
  </div>
);

}

export default BugDetailsPage;
