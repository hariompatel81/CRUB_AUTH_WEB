import "../styles/Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <header className="dashboard-header">
        <h2 className="logo">CRUD-AUTH-WEB</h2>
        <button className="getstart-btn">Get Start</button>
      </header>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        <h1>Welcome to CRUD AUTH WEB</h1>
        <p>You are successfully logged in</p>
      </main>

      {/* FOOTER */}
      <footer className="dashboard-footer">
        <p>© 2026 CRUD Auth Web. All rights reserved.</p>
      </footer>

    </div>
  );
}
