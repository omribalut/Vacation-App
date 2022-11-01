import { NavLink, useNavigate } from "react-router-dom";
import "./Menu2.css";

function Menu2(): JSX.Element {

    const navigate = useNavigate();

    const test = () => {
        const token = localStorage.getItem("token");
        
        if(token){
            navigate("/vacations");
        }
        else{
            navigate("/login");
        }
    }

    return (
        <div className="Menu2">
            <button onClick={test}>Vacations</button>
        </div>
    );
}

export default Menu2;