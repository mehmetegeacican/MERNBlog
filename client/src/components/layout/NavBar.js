const NavBar = () => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                    <a href role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-start">
                    <a href className="navbar-item">
                        Home
                    </a>

                    <a href className="navbar-item">
                        Documentation
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div class="buttons">
                        <a href className="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a href class="button is-light">
                            Log in
                        </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;