import "../styles/ProfilePage.css";

function ProfilePage() {
  const user = {
    name: "Daria",
    email: "daria@email.com",
    level: 2,
    title: "Debugger Pro ",
    xp: 120,
    projects: [
      { id: 1, name: "Project A" },
      { id: 2, name: "Project B" },
    ],
  };

  return (
    <div className="profile-page">
      <h1 className="profile-title">Profile Page</h1>

      {/* CARD PROFIL */}
      <div className="profile-card">
        <div className="profile-avatar">
          <div className="avatar-circle">👤</div>
        </div>

        <div className="profile-info">
          <h2>{user.name}</h2>
          <p className="profile-email">{user.email}</p>

          <div className="profile-xp">
            <span>
              Nivel {user.level} • {user.title}{user.xp} XP
            </span>
          </div>


          <div className="xp-bar">
            <div
              className="xp-bar-fill"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div>
    <button
      className="logout-button"
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
        }}
      >
        Deconectează-te
    </button>

      {/* PROIECTE */}
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">Member of:</p>

      <div className="projects-list">
        {user.projects.map((project) => (
          <div key={project.id} className="project-card">
            <span>{project.name}</span>
            <button className="details-button">Vezi detalii</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
