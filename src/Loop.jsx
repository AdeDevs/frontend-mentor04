import menu from "./assets/menu.png";
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import pinterest from './assets/pinterest.png';
import twitter from './assets/twitter.png';

function Loops() {
  return (
    <div className="container">
      <header className="menu">
        <nav>
          <h1>loopstudios</h1>

          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
          <img className="menu-btn" src={menu} alt="menu" />
        </nav>
        <div className="box">
          <p>immersive experiences that deliver</p>
        </div>
      </header>

      <section className="vr">
        <div className="vr_container">
          <div>{/* <img src={googles} alt="" /> */}</div>
          <div>
            <h1>THE LEADER IN INTERACTIVE VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>

      <div className="creations">
        <header>
          <h1>OUR CREATIONS</h1>
          <button>SEE ALL</button>
        </header>
        <section className="creations_cards">
          <div>
            <p>DEEP EARTH</p>
          </div>
          <div>
            <p>NIGHT ARCADE</p>
          </div>
          <div>
            <p>SOCCER TEAM VR</p>
          </div>
          <div>
            <p>THE GRID</p>
          </div>
          <div>
            <p>FROM UP ABOVE VR</p>
          </div>
          <div>
            <p>POCKET BOREALIS</p>
          </div>
          <div>
            <p>THE CURIOSITY</p>
          </div>
          <div>
            <p>MAKE IT FISHEYE</p>
          </div>
        </section>
      </div>
      <button className="mob-btn">SEE ALL</button>
      <footer>
        <main>
          <h1>loopstudios</h1>

          <ul className="mob-foot">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>

          <ul>
            <li><img src={facebook} alt="facebook" /></li>
            <li><img src={twitter} alt="twitter" /></li>
            <li><img src={pinterest} alt="pinterest" /></li>
            <li><img src={instagram} alt="instagram" /></li>
          </ul>
        </main>

        <sub>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
          <p>&copy; 2021 Loopstudios. All rights reserved.</p>
        </sub>
      </footer>
    </div>
  );
}

export default Loops;
