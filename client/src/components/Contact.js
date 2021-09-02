import linkedin from '../img/linkedin.png';
import github from '../img/github.png';

export function Contact() {
  return <>
    <div className="flex-container">
        <h1>Contact Me</h1>
    </div>
    <div className="flex-container-center">  
        <img src={linkedin} alt="linkedin" className="logo" />
        <h3 style={{margin: 'auto 0.5em'}}><a rel="noreferrer" href="https://www.linkedin.com/in/gaby-cruz/" target="_blank">LinkedIn</a></h3>
    </div>
    <br />
    <div className="flex-container-center">      
      <img src={github} alt="github" className="logo" />
      <h3 style={{margin: 'auto 0.5em'}}><a rel="noreferrer" href="https://github.com/gabycruzzin" target="_blank">GitHub</a></h3>
    </div>
  </>;
}
