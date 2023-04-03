import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCountryId } from "../../redux/actions";
import style from "./Detail.module.css";
import Actividades from "../../Components/Activities/Activities";
import { Link } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const countryId = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountryId(location.state));
  }, [dispatch, location]);

  return (
    <div className={style.inicio}>
        <div className={style.btnHome}>
        <Link to="/home">
          <button className={style.btnInicio}>Home</button>
        </Link>
      </div>
      <div className={style.main}>
        <img
          className={style.img}
          src={countryId?.image}
          alt="Imagen Country"
        />
        <ul>
          <li className={style.info}>Country: {countryId?.id} </li>
          <li className={style.info}>Name: {countryId?.name} </li>
          <li className={style.info}>Continent: {countryId?.continents} </li>
          <li className={style.info}>Capital: {countryId?.capital} </li>
          <li className={style.info}>SubRegion: {countryId?.subregion} </li>
          <li className={style.info}>Area: {countryId?.area} </li>
          <li className={style.info}>Poblacion: {countryId?.population} </li>
        </ul>
        <div className="contenedor-actividades">
          {countryId?.activities.map((act) => {
            return (
              <div className={style.info} key={act.id}>
                <Actividades
                  name={act.name}
                  difficulty={act.difficulty}
                  duration={act.duration}
                  season={act.season}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
