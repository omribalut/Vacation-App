import { NavLink } from "react-router-dom";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import VacationList from "../../VacationArea/VacationList/VacationList";
import Menu2 from "../Menu/Menu2";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            
            {/* Auth Menu */}
    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand"><NavLink className="title" to={"/home"}> <span>ObserVacations</span>
                    
                    </NavLink> <AuthMenu /></a>
                    <label>|</label>
                    <h2><Menu2 /></h2>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        {/* <NavLink className="title" to={"/vacations"}><span>Vacations</span></NavLink> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Header;
