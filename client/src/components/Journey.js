import college from '../img/college.JPG';
import jpmorgan from '../img/jpmorgan.jpg';

export function Journey() {
  return <>
    <h1>Journey</h1>
    <div className="flex-container">
      <div className="flex-item-left">
        <h2>University of Houston</h2>
        <p style={{fontStyle: 'italic'}}>2012 - 2016</p>
        <p>Here's a picture of my friends and I at a football game in August 2012! Go Coogs 🐾</p>
        <p>I was an active member of the <a class="pLinks" href="https://nscs.org/" target="_blank">National Society of Collegiate Scholars</a>, President & Public Relations officer of <a class="pLinks" href="https://csgirls.org/about/" target="_blank">CSGirls</a>.</p>
        <p>I was initially a Math major, almost switched to Computer Engineering, then eventually chose Computer Science as my degree. I'm glad I did, because I enjoy what I do now 💻</p>
        <p>A quote that sums up my college experience -</p>
        <p style={{fontStyle: 'italic'}}>"Perseverance is the hard work you do AFTER you get tired of doing the hard work you already did."</p>
      </div>
      <div className="flex-item-right">
        <img src={college} alt="college" />
      </div>
    </div>
    <div className="flex-container">
      <div className="flex-item-left">
        <h2>JPMorgan Chase</h2>
        <p style={{fontStyle: 'italic'}}>2017 - PRESENT</p>
        <p>Here's a picture of me and my fellow JPMorgan summer interns!</p>
        <p>After my summer internship, I was offered a full-time position at JPM as a Software Engineer.</p>
        <p>I started off with Java/Spring Boot development, and more recently started incorporating UI/Frontend Development. I think it's safe to say that I found my niche, because I find it so fun & satisfying.</p>
        <p>All of the creative aspects of developing the Frontend are what I look forward to. ✨</p>
      </div>
      <div className="flex-item-right">
        <img src={jpmorgan} alt="college" />
      </div>
    </div>
  </>;
}
