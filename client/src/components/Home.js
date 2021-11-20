import { Link } from "react-router-dom";
import picture from "../img/profile_pic.jpg";

export function Home() {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item-left">
          <h1>About Me</h1>
          <p>Hi there, I'm Gaby! 🖖</p>
          <p>Born and raised in Houston, TX.</p>
          <p>
            I graduated with a Bachelor of Science in Computer Science at the{" "}
            <Link to="/journey" className="pLinks">
              University of Houston
            </Link>
            . It was a very challenging four years, but I made it out alive with
            a useful skillset that would last me the rest of my life.
          </p>
          <p>
            I'm currently a Software Engineer at{" "}
            <Link to="/journey" className="pLinks">
              JPMorgan Chase
            </Link>{" "}
            working on some pretty cool things.
          </p>
          <p>
            In my free time, I like to grow various types of{" "}
            <Link to="/interests" className="pLinks">
              cacti, make stickers, and try new kinds of food!
            </Link>
          </p>
          <p>
            Hope you enjoy my personal website - I made it from scratch using
            ReactJS, Node, HTML5, & CSS3! 😃
          </p>
        </div>
        <div className="flex-item-right">
          <img src={picture} alt="Selfie" />
        </div>
      </div>
    </>
  );
}
