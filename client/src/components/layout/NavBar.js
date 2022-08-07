import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar is-primary">
            <div className="navbar-brand">
                <p className="navbar-item">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="" width="112" height="28"/>
                </p>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                
                <div className="navbar-start">
                    <Link to= "/" className="navbar-item">
                        Home
                    </Link>
                    <Link to= "/blogs" className="navbar-item" style={{hover:true}}> Blogs </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <p className="button is-link is-inverted">
                                <strong>Sign up</strong>
                            </p>
                            <p className="button is-light is-inverted">
                                Log in
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;