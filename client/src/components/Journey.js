import college from '../img/college.JPG';
import footballgame from '../img/footballgame.jpg';
import jpmorgan from '../img/jpmorgan.jpg';

export function Journey() {
  return <>
    <div className="flex-container">
      <div className="flex-item-left">
        <h1>Journey</h1>
        <h2>University of Houston</h2>
        <p style={{fontStyle: 'italic'}}>2012 - 2016</p>
        <p>I was an active member of the <a class="pLinks" href="https://nscs.org/" target="_blank">National Society of Collegiate Scholars</a>, President & Public Relations officer of <a class="pLinks" href="https://csgirls.org/about/" target="_blank">CSGirls</a>.</p>
        <p>I was initially a Math major, almost switched to Computer Engineering, then eventually chose Computer Science as my degree. I'm glad I did, because I enjoy building websites like this one 💻</p>
        <p>A quote that sums up my college experience -</p>
        <p className="quote" style={{fontStyle: 'italic'}}>"Perseverance is the hard work you do AFTER you get tired of doing the hard work you already did."</p>
      </div>
      <div className="flex-item-right">
        <img src={college} alt="college" />
        <p>My friends and I at a football game in August 2012! Go Coogs 🐾</p>

        <img src={footballgame} alt="footballgame" />
        <p>Football game at the brand new stadium</p>
      </div>
    </div>
    <br />
    <div className="flex-container">
      <div className="flex-item-left">
        <h2>JPMorgan Chase</h2>
        <p style={{fontStyle: 'italic'}}>2017 - PRESENT</p>
        <p>After my summer internship, I was offered a full-time position at JPM as a Software Engineer.</p>
        <p>I started off with Java development, but eventually got boring to me. After some time, I inquired about getting Frontend Development tasks at work. It was so much better! Hehe. I think it's safe to say that I found my niche, because you have to use both creative AND puzzle-solving skills. ✨</p>
      </div>
      <div className="flex-item-right">
        <img src={jpmorgan} alt="college" />
        <p>Me and my fellow JPMorgan summer interns in 2015</p>
      </div>
    </div>
  </>;
}
