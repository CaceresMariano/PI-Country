import style from "./Home.module.css"
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {getActivities, getCountries} from "../../redux/actions";


const Home = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities())
    },[dispatch])

    

    return (
         
         <div className={style.home}>
            <h1 className={style.titulo}>Countries</h1>
            <CardsContainer /> 
        </div>
    )
}

export default Home;