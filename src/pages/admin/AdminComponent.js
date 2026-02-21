import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import "./AdminComponent.css";

function AdminComponent({ theme }) {
  const history = useHistory();
  const [greeting, setGreeting] = useState({ title: "", subTitle: "" });
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    url: "",
  });

  useEffect(() => {
    // Load existing data
    db.collection("content")
      .doc("greeting")
      .get()
      .then((doc) => {
        if (doc.exists) setGreeting(doc.data());
      });

    const unsubscribe = db.collection("projects").onSnapshot((snapshot) => {
      setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleUpdateBio = async (e) => {
    e.preventDefault();
    await db.collection("content").doc("greeting").set(greeting);
    alert("Bio updated!");
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    await db.collection("projects").add(newProject);
    setNewProject({ name: "", description: "", url: "" });
    alert("Project added!");
  };

  const handleDeleteProject = (id) =>
    db.collection("projects").doc(id).delete();

  const handleLogout = () => {
    auth.signOut();
    history.push("/login");
  };

  return (
    <div className="admin-wrapper" style={{ backgroundColor: theme.body }}>
      <nav className="admin-nav" style={{ backgroundColor: theme.highlight }}>
        <h1 style={{ color: theme.text }}>Nexus Admin</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </nav>

      <div className="admin-content">
        <section className="admin-section">
          <h2 style={{ color: theme.text }}>Edit Greeting</h2>
          <form onSubmit={handleUpdateBio}>
            <input
              type="text"
              value={greeting.title}
              placeholder="Full Name (e.g., Rafsan Jani)"
              onChange={(e) =>
                setGreeting({ ...greeting, title: e.target.value })
              }
            />
            <textarea
              value={greeting.subTitle}
              placeholder="Your bio / subtitle..."
              onChange={(e) =>
                setGreeting({ ...greeting, subTitle: e.target.value })
              }
            />
            <button type="submit" className="save-btn">
              Update Bio
            </button>
          </form>
        </section>

        <section className="admin-section">
          <h2 style={{ color: theme.text }}>Project Manager</h2>
          <form onSubmit={handleAddProject}>
            <input
              type="text"
              placeholder="Project Name (e.g., Ramadan Flow)"
              value={newProject.name}
              onChange={(e) =>
                setNewProject({ ...newProject, name: e.target.value })
              }
            />
            <textarea
              placeholder="Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="URL (Github/Live)"
              value={newProject.url}
              onChange={(e) =>
                setNewProject({ ...newProject, url: e.target.value })
              }
            />
            <button type="submit" className="save-btn">
              Add Project
            </button>
          </form>

          <div className="project-grid">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="project-list-item"
                style={{ color: theme.text }}
              >
                <span>
                  <strong>{proj.name}</strong>
                </span>
                <button onClick={() => handleDeleteProject(proj.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminComponent;
