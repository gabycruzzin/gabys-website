import "../css/AppNavbar.css";

export function AppNavbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a className="button-font logo" href="#">
        GC
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
        style={{ justifyContent: "center" }}
      >
        <div className="navbar-nav">
          <a href="#" className="button button-font">
            Home
          </a>
          <a href="#journey" className="button button-font">
            Journey
          </a>
          {/* <a href="#interests" className="button button-font">
            Interests
          </a> */}
          <a href="#contact" className="button button-font">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
