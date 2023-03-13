import React from 'react';
import Select from 'react-select';
import style from "./PopulationFilter.module.css"
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getByPopulation } from '../../../redux/actions';


const PopulationFilter = () =>{
    
    const dispatch = useDispatch()

    const options = [
        {label:"Ascendente", value:"asc"},
        {label:"Descendente", value:"dsc"}
    ]
    const handleChange = (event) => {        
        dispatch(getByPopulation(event.value))
    }

    return (
        <div>
            <Select options = {options} onChange={handleChange}
            defaultValue = {{label:"Search for Population", value:''}} />
        </div>
    )
}
export default PopulationFilter;