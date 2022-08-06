import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
                    </div>
                    <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>
                <div className="navbar-start">
                    <Link to="/">
                        <div className="navbar-item">
                            Home
                        </div>
                    </Link>
                    <Link to="/blogs">
                        <div className="navbar-item">
                            Blogs
                        </div>
                    </Link>
                    
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <div  className="button is-primary">
                            <strong>Sign up</strong>
                        </div>
                        <div  className="button is-light">
                            Log in
                        </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;