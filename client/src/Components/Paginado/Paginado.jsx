import React from "react";
import style from "./Paginado.module.css";

const Paginado = ({ countries, paginado }) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(countries / 10); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div className={style.main}>      
      <nav className={style.container}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <div key={number}>
              <button
                className={style.paginatedButton}
                key={number}
                onClick={() => paginado(number)}
              >
                <h3>{number}</h3>
              </button>
              
            </div>
          ))}
      </nav>
    </div>
  );
};
export default Paginado;
