import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import style from "./Continent.module.css"
import { findContinent } from '../../../redux/actions';

const ContinentFilter = () => {
   
    const options = [
        {
          value: "North America",
          label: "North America",
        },
        {
          value: "South America",
          label: "South America",
        },
        {
          value: "Antarctica",
          label: "Antarctica",
        },
        {
          value: "Asia",
          label: "Asia",
        },
        {
          value: "Africa",
          label: "Africa",
        },
        {
          value: "Oceania",
          label: "Oceania",
        },
        {
          value: "Europe",
          label: "Europe       ",
        },
    ]
    const dispatch = useDispatch()
      
    const handleChange = (event) => {
        dispatch(findContinent(event.value))
    }   

    return (
      <div>
            <Select options = {options} onChange={handleChange} 
            defaultValue = {{label:"Search for Continent", value:''}}/>
      </div>
    )
}
export default ContinentFilter;