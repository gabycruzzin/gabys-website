import {Link} from "react-router-dom";
import '../css/AppNavbar.css';

export function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{justifyContent: 'center'}}>
        <div className="navbar-nav">
          <Link to="/" className="button button-font">Home</Link>
          <Link to="/journey" className="button button-font">Journey</Link>
          <Link to="/interests" className="button button-font">Interests</Link>
          <Link to="/contact" className="button button-font">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
