import React from "react";
import Select from 'react-select';

import { useSelector, useDispatch } from 'react-redux';
import { getCountryByActivities } from "../../../redux/actions";


const ActivitiesFilter = () => {

    const activities = useSelector(state => state.activities)
    
    const dispatch = useDispatch()
    const activitiesInfo = activities.map(e => {
        
        return {
            value: e.name,
            label: e.name,
        }        
    })
    const handlerActivities = (event)=>{
        dispatch(getCountryByActivities(event.value))
    }

    return (
        <div>
            <label><Select options={activitiesInfo} onChange={handlerActivities} 
            defaultValue = {{label:"Search for Activities", value:''}}></Select></label>
        </div>
    )

}
export default ActivitiesFilter;

