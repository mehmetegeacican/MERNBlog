import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <section className="hero ">
            <nav className="navbar is-link">
                <div className="container">
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-start">
                            <div className="tabs is-left">
                                <Link to="/" className="navbar-item" style={{"fontFamily":"cursive"}}> Blogs </Link>
                                <Link to="/create" className="navbar-item" style={{"fontFamily":"cursive"}}> Add Blog  </Link>
                            </div>
                            
                        </div>
                        <div className="navbar-end">
                            <div className="tabs is-right">
                                <ul>
                                    <a className="button is-primary is-outlined mr-2" href="/" style={{"fontFamily":"cursive"}}> Sign Up  </a>
                                    <a className="button is-secondary is-outlined " href="/" style={{"fontFamily":"cursive"}} > Login  </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
        </section>
    )
}

export default NavBar;