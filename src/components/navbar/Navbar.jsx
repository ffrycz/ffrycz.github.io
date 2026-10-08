import {NavLink, useNavigate} from "react-router-dom";
import './Navbar.css'
import homeIcon from "../../images/home.webp";

function Navbar({sources}) {
    const navigate = useNavigate();


    return (
        <nav className={"navbarBox"}>
            <div className={"homeButtonContainer"}>
                <button
                    title={"Go to home page"}
                    className={"homeButton"}
                    onClick={() => navigate("/")}
                >
                    <img src={homeIcon} alt="home" className={"homeIcon"} />
                        ffrycz
                </button>
            </div>
            <div className={"navButtonsContainer"}>
                {[...sources].map((source, index) => (
                    <NavLink
                        key={index}
                        to={source.path}
                        className={({ isActive }) => isActive ? ("activeNavButton") : ("navButton")}>
                        {source.name}
                    </NavLink>
                ))}
            </div>
            <div className={"navEdge"}>
                Placeholder
            </div>

        </nav>
    )
}

export default Navbar;