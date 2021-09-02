import cacti from '../img/cacti.jpg';
import pie from '../img/pie.jpg';
import cookies from '../img/cookies.jpg';
import stickers from '../img/stickers.jpg';

export function Interests() {
  return <>
  <div className="flex-container">
    <div className="flex-item-left">
      <h1>Interests + Hobbies</h1>
      <h2>Cacti collection 🌵</h2>
      <p>Aren't they magnificent?</p>
      <p>Me and my boyfriend Jake take care of these many different species of cacti - it took a lot of trial and error.</p>
      <p>These guys are dangerous, let me tell you. Have to be really careful when re-potting them.</p>
      <p>Never thought we would have any kind of plants... but they're so fun to watch grow! Plus, they need VERY little water.</p>
    </div>
    <div className="flex-item-right">
      <img src={cacti} alt="cacti" />
      <p>The gang's all here!</p>
    </div>
  </div>
  <div className="flex-container">
    <div className="flex-item-left">
    <img src={cookies} alt="cookies" />
      <p>Red velvet crinkle cookies</p>

      <img src={pie} alt="pie" />
      <p>Berry pie</p>
    </div>
    <div className="flex-item-right">
      <h2>I likey to bakey 👩‍🍳</h2>
      <p>I whip out my baking skills when the holidays come around or for birthdays.</p>
    </div>
  </div>
  <div className="flex-container">
    <div className="flex-item-left">
      <h2>Arts + Crafts 🎨</h2>
      <p>I create, print, and cut my own custom stickers!</p>
      <p>Tools used: Photoshop, Silhouette Cameo (cutting machine), Wacom tablet, HP Envy Photo printer</p>
      <p>I use these for my notebooks and physical planners</p>
    </div>
    <div className="flex-item-right">
      <img src={stickers} alt="stickers" />
      <p>Stickers made entirely by me!</p>
    </div>
  </div>
</>;
}
