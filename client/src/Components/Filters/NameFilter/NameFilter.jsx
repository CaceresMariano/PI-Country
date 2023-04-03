import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getCountries, getName } from "../../../redux/actions";
import style from "./NameFilter.module.css"

const NameFilter = () => {
    
    const [ name, setNameFilter ] = useState("")
    const dispatch = useDispatch()
    const handlerChange = (event) => {setNameFilter(event.target.value)}    
    
    const handlerFindName = () => {
        dispatch(getName(name))
        setNameFilter("")
    }
    const handlerFindAll = () => {
        dispatch(getCountries())
        setNameFilter("")
    }

    return (
        <div className={style.main}>
            <input className={style.input}
                value={name} 
                type="text" placeholder=" Search Country" 
                onChange={handlerChange} />
            <div className={style.flexBtn}>
                <button className={style.btn} style={{"borderRadius":"10px"}} onClick={handlerFindName}><h4>Find</h4></button>
                <button className={style.btn} style={{"borderRadius":"10px"}} onClick={handlerFindAll}><h4>All Countries</h4></button>
            </div>
        </div>
    )
}
export default NameFilter;