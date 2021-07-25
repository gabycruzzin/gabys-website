import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './css/App.css';
import {AppNavbar} from './components/AppNavbar';
import {Contact} from './components/Contact';
import {Career} from './components/Career';
import {Interests} from './components/Interests';
import {Home} from './components/Home';

export default function App() {
  return (
    <Router>
      <header>
        <AppNavbar />
      </header>
      <main>
        <div className="container">
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/career">
              <Career />
            </Route>
            <Route path="/interests">
              <Interests />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </main>
      <footer>
        <div className="container">
            <p>
              &copy; 2021 Gabriela Cruz
            </p>
        </div>
      </footer>
    </Router>
  );
}
