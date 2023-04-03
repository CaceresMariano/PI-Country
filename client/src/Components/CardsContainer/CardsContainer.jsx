import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPorPagina, setCountryPorPagina] = useState(9);
  const countries = useSelector((state) => state.countries);
  

  const indexLastCountry = currentPage * countryPorPagina;

  const indexFirstCountry = indexLastCountry - countryPorPagina;

  const currentCountries = countries.slice(indexFirstCountry, indexLastCountry);
    
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
    if(pageNumber === 1){setCountryPorPagina(9)}else{setCountryPorPagina(10)}
  };

  return (
    <div className={style.containerMain}>
      <div className={style.pageTitle}><h2>Page {currentPage}</h2></div>
      <div className={style.divContainer}>
        {currentCountries.map((country) => {
          return (
            <div className={style.container} key={country.id}>
              <Card
                id={country.id}
                image={country.image}
                name={country.name}
                continent={country.continent ? country.continent :country.continents }
              />
            </div>
          );
        })}
      </div>        
      <div>
        <Paginado
          countryPorPagina={countryPorPagina}
          countries={countries.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
