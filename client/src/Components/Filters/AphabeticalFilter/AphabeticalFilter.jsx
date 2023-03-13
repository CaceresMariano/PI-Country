import React from 'react';
import Select from 'react-select';
import style from "./AphabeticalFilter.module.css"
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ascFilter } from '../../../redux/actions';

const AphabeticalFilter = () => {
    const dispatch = useDispatch()

    const options = [
        {label:"Ascendente", value:"asc"},
        {label:"Descendente", value:"dsc"}
    ]
    const handlerChange = (event) => {
        dispatch(ascFilter(event.value))
    }
    return (
        <div>
            <Select options={options} onChange={handlerChange} 
            defaultValue = {{label:"Search for Alphabetic Order", value:''}} />
        </div>
    )
}
export default AphabeticalFilter;