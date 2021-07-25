import {Link} from "react-router-dom";
import '../css/AppNavbar.css';

export function AppNavbar() {
  return (
    <div className="innerContainer">
      <Link to="/" className="button">Home</Link>
      <Link to="/career" className="button">Career</Link>
      <Link to="/interests" className="button">Interests</Link>
      <Link to="/contact" className="button">Contact</Link>
    </div>
  );
}
