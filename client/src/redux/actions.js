import axios from 'axios';
import {GET_COUNTRIES, GET_ID, GET_NAME, GET_COUNTRIES_BY_ALPHABET,
        FILTER_BY_CONTINENT, GET_ACTIVITIES, FILTER_BY_ACTIVITY, 
        GET_BY_POPULATION, GET_RESET, POST_ACTIVITIES} from "./actionsType";


const getCountries = () =>{
    return async function (dispatch) {
        const userInfo = await axios.get('http://localhost:3001/countries');
        const country = userInfo.data
        dispatch({type: GET_COUNTRIES, payload: country})
    }

}
const getCountryId = (props) => {       
    return async function(dispatch){
        const country = await axios.get(`http://localhost:3001/countries/${props.id}`)
        const countryInfo = country.data
        dispatch({type: GET_ID, payload: countryInfo})
    }
}
const getActivities = () => {
    return async function (dispatch){
        const activities = await axios.get('http://localhost:3001/activities')
        const activitiesInfo = activities.data
        dispatch({type: GET_ACTIVITIES, payload:activitiesInfo})
    }
}
const getName = (name) => {
    return async function (dispatch) {
        const countryName = await axios.get(`http://localhost:3001/countries?name=${name}`)
        const dataName = countryName.data
        dispatch({type:GET_NAME, payload: dataName})
    }
}
const getCountryByActivities = (payload) => {
    return {type: FILTER_BY_ACTIVITY, payload}
}
const findContinent = (payload) => {    
    return {type: FILTER_BY_CONTINENT, payload}
}
const ascFilter = (payload) => {
    return {type: GET_COUNTRIES_BY_ALPHABET, payload}
}
const getByPopulation = (payload) => {
    return {type: GET_BY_POPULATION, payload}
}
const resetDetail = () => {
    return {type: GET_RESET}
}

export {
    getCountries, getCountryId, getActivities, 
    getCountryByActivities, getName, findContinent, 
    ascFilter, getByPopulation, resetDetail
}


