import googles from './assets/desktop/image-interactive.jpg'

function Loops() {
    return (
        <div className="container">
            <header>
                <nav>
                    <h1>loopstudios</h1>

                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </nav>
                <div className="box">
                    <p>immersive experiences that deliver</p>
                </div>
            </header>
            <div className="vr">
                <img src={googles} alt="vr googles"/>
                <section>
                    <h1>THE LEADER IN INTERACTIVE VR</h1>
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </section>
            </div>
        </div>
    );
}

export default Loops;