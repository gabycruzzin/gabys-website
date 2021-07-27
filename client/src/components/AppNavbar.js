import {Link} from "react-router-dom";
import '../css/AppNavbar.css';

export function AppNavbar() {
  return (
    <div className="innerContainer">
      <Link to="/" className="button button-font">Home</Link>
      <Link to="/journey" className="button button-font">Journey</Link>
      <Link to="/interests" className="button button-font">Interests</Link>
      <Link to="/contact" className="button button-font">Contact</Link>
    </div>
  );
}
