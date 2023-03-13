import {
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_ID,
  GET_NAME,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_COUNTRIES_BY_ALPHABET,
  GET_BY_POPULATION,
  GET_RESET,
  POST_ACTIVITIES,
} from "./actionsType";

const initialState = {
  countries: [],
  activities: [],
  allCountry: [],
  getName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountry: action.payload,
      };
    case GET_ID:
      return { ...state, country: action.payload };

    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };
    case FILTER_BY_ACTIVITY:
      const activityFilter = state.allCountry.filter((ca) =>
        ca.activities?.some(
          (a) => a.toLowerCase() === action.payload.toLowerCase()
        )
      );
      return { ...state, countries: activityFilter };
    case GET_NAME:
      return { ...state, countries: action.payload };
    case FILTER_BY_CONTINENT:
      const find = state.allCountry.filter(
        (c) => c.continent === action.payload
      );
      return {
        ...state,
        countries: find,
      };
    case GET_COUNTRIES_BY_ALPHABET:
      const alphabetFiltered =
        action.payload === "asc"
          ? state.allCountry.slice().sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.countries.slice().sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            });
      return { ...state, countries: alphabetFiltered };
    case GET_BY_POPULATION:
      const populationFilter =
        action.payload === "asc"
          ? state.countries.slice().sort(function (a, b) {
              if (a.population > b.population) return 1;
              if (a.population < b.population) return -1;
              return 0;
            })
          : state.countries.slice().sort(function (a, b) {
              if (a.population < b.population) return 1;
              if (a.population > b.population) return -1;
              return 0;
            });
      return { ...state, countries: populationFilter };
    case GET_RESET:
      return { ...state, country: {} };

    default:
      return { ...state };
  }
};
export default rootReducer;
