import './hamburger.css'
import MenuScript from './menuScript';

function HamburgerMenu() {
    // const hamburger = document.querySelector(".hamburger");
    // const navMenu = document.querySelector(".nav-menu");
    
    // hamburger.addEventListener("click", () => {
    //     hamburger.classList.toggle("active");
    //     navMenu.classList.toggle("active");
    // })
  return (
    <>
    <MenuScript />
      <header>
        <nav class="navbar">
          <a href="#" class="nav-branding">
            ADEYEMI
          </a>

          <ul class="nav-menu">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
}




export default HamburgerMenu;