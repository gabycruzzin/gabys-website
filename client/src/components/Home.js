import {Link} from "react-router-dom";
import picture from '../img/profile_pic.jpg';

export function Home() {
  return <>
    <h1>About Me</h1>
    <div className="flex-container">
      <div className="flex-item-left">
          <p>Hi there, I'm Gaby! 🖖</p>
          <p>Born and raised in Houston, TX.</p>
          <p>I initially thought I would major in Math, but changed my mind to purse Computer Science at the University of Houston. It was a very challenging four years, but I made it out alive with a useful skillset that would last me the rest of my life.</p>
          <p>I'm currently a Software Engineer at <Link to="/career" className="pLinks">JPMorgan Chase</Link> working on some pretty cool things.</p>
          <p>In my free time, I like to grow various types of <Link to="/interests" className="pLinks">cacti, practice hand-lettering, and eat good food.</Link></p>
          <p>Hope you enjoy my personal website - I made it from scratch using ReactJS, Node, HTML5, & CSS3! 😃</p>
      </div>
      <div className="flex-item-right">
        <img src={picture} alt="Selfie" />
      </div>
    </div>
  </>;
}
