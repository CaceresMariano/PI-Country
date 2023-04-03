import { Link } from "react-router-dom";
import ActivitiesFilter from "../Filters/ActivitiesFilter/ActivitiesFilter";
import AphabeticalFilter from "../Filters/AphabeticalFilter/AphabeticalFilter";
import ContinentFilter from "../Filters/Continent/Continent";
import NameFilter from "../Filters/NameFilter/NameFilter";
import PopulationFilter from "../Filters/PopulationFilter/PopulationFilter";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.nav}>
      <Link to="/home">
        <h2 className={style.text}>Home</h2>
      </Link>
      <Link to="/form">
        <h2 className={style.text}>Activities</h2>
      </Link>
      <div className="div">
        <h2 className={style.text1}>Filter Activity</h2>
        <ActivitiesFilter />
      </div>
      <div className="div">
        <h2 className={style.text1}>Filter Continent</h2>
        <ContinentFilter />
      </div>
      <div className="div">
        <h2 className={style.text1}>Filter Alph. Order</h2>
        <AphabeticalFilter />
      </div>
      <div className="div">
        <h2 className={style.text1}>Filter Population</h2>
        <PopulationFilter />
      </div>
      <div className="div">
        <h2 className={style.text1}>Search for Name</h2>
        <NameFilter />
      </div>
    </div>
  );
};

export default NavBar;
