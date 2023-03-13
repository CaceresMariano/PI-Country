import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";
import style from "./Form.module.css";
import Select from "react-select";
import axios from "axios";

function validate(datos) {
  const errors = {};
  if (!datos.name) errors.name = "Complete Name Activity";
  if (datos.difficulty < 1 || datos.difficulty > 5)
    errors.difficulty = "Insert validate Difficulty";
  if (datos.duration < 1 || datos.duration > 10)
    errors.duration = "Insert validate hours between 1 and 10 ";
  if (!datos.season) errors.season = "Please select a Season";
  if (!datos.countries.length)
    errors.countries = "Select at least one country plase";
  return errors;
}

const Form = () => {
  const allCountries = useSelector((state) => state.allCountry);
  const dispatch = useDispatch();
  const history = useHistory();
  const [datos, setDatos] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countries: [],
  });
  const [error, setError] = useState({});

  useEffect(() => {
    const validations = validate(datos);
    setError(validations);
    dispatch(getCountries());
  }, [dispatch, datos]);

  const opcionDifficulty = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
  ];
  const opcionSeason = [
    { label: "Summer", value: "summer" },
    { label: "Spring", value: "spring" },
    { label: "Autumn", value: "autumn" },
    { label: "Winter", value: "winter" },
  ];
  const opcionCountry = allCountries.map((e) => {
    return { label: e.name, value: e.name };
  });
  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setDatos({ ...datos, [property]: value });
  };
  const handleSelectDifficulty = (event) => {
    const value = event.value;
    setDatos({ ...datos, difficulty: value });
  };
  const handleSelectSeason = (event) => {
    const value = event.value;
    setDatos({ ...datos, season: value });
  };
  const handleSelectCountry = (event) => {
    const value = event.value;
    const newArray = datos.countries;
    const exist = newArray?.filter((e) => e === value);
    if (exist.length > 0) {
      setDatos({ ...datos });
    } else {
      setDatos({ ...datos, countries: [...datos.countries, value] });
    }
  };

  const handleSummit = (event) => {
    event.preventDefault();
    if (Object.values(error).length > 0) {
      alert("Please complete information");
    } else {
      axios.post("http://localhost:3001/activities", datos);
      history.push("/home");
      alert("Activity Created!!");
    }
  };
  const styleBtn = {
    marginTop: "100px",
    padding: "10px 20px",
    borderRadius: "10px",
    color: "black",
    backgroundColor: "Orange",
    fontSize: "20px",
    fontWeight: "700",
    cursor: "pointer",
    margin: "0 7px",
  };
  const handleDelete = (event) => {
    setDatos({
      ...datos,
      countries: datos.countries.slice().filter((e) => e !== event),
    });
  };

  return (
    <div className={style.container}>
      <div className={style.main}>
        <form className={style.form} onSubmit={handleSummit}>
          <div>
            <h1 className={style.titulo}>Add Activities</h1>
          </div>
          <label className={style.title}>Activity Name</label>
          <div className={style.div1}>
            <input
              className={style.input}
              type="text"
              placeholder="Input Name Activity"
              name="name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {error.name && <span>{error.name}</span>}
          <label className={style.title}>Select Difficulty</label>
          <div className={style.div1}>
            <Select
              options={opcionDifficulty}
              placeholder="Input Difficulty"
              onChange={handleSelectDifficulty}
              className={style.input}
            />
          </div>
          {error.difficulty && <span>{error.difficulty}</span>}
          <label className={style.title}>Select Duration Time</label>
          <div className={style.div1}>
            <input
              className={style.input}
              type="text"
              placeholder="Input Duration"
              name="duration"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {error.duration && <span>{error.duration}</span>}
          <label className={style.title}>Input Season</label>
          <div className={style.div1}>
            <Select
              options={opcionSeason}
              placeholder="Input Season"
              onChange={handleSelectSeason}
              className={style.input}
            />
          </div>
          {error.season && <span>{error.season}</span>}
          <label className={style.title}>Select Countries</label>
          <div className={style.div1}>
            <Select
              options={opcionCountry}
              placeholder="Input Continent"
              onChange={handleSelectCountry}
              className={style.input}
            />
          </div>
          {error.countries && <span>{error.countries}</span>}
          <div>
            {datos.countries.map((e) => (
              <div key={e} className={style.mainCountry}>
                <button type="button" onClick={() => handleDelete(e)} className={style.btnCountry}>
                  X
                </button>
                <p className={style.pCountry}>{e}</p>
              </div>
            ))}
          </div>
          <div className={style.containerInput}>
            <Link to="/home">
              <button style={styleBtn} type="button">
                Home
              </button>
            </Link>
            <button style={styleBtn} type="submit">
              Summit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
