import { Link } from "react-router-dom";
import ActivitiesFilter from "../Filters/ActivitiesFilter/ActivitiesFilter";
import AphabeticalFilter from "../Filters/AphabeticalFilter/AphabeticalFilter";
import ContinentFilter from "../Filters/Continent/Continent";
import NameFilter from "../Filters/NameFilter/NameFilter";
import PopulationFilter from "../Filters/PopulationFilter/PopulationFilter";
import style from "./NavBar.module.css"

const NavBar = () => {
    return (
        
            <div className={style.nav}>
                <Link to="/home">
                    <h2 className={style.text}>Home</h2>
                </Link>
                <Link to="/form">
                    <h2 className={style.text}>Add Activities</h2>
                </Link>
                  <ActivitiesFilter /> 
                  <ContinentFilter />
                  <AphabeticalFilter />
                  <PopulationFilter />  
                  <NameFilter />                                 
            </div>            
        
    )
}

export default NavBar;
