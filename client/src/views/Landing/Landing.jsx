import { Link } from "react-router-dom";
import style from "./Landing.module.css"

const Landing = () =>{
    return (
    <div>
        <div className={style.main}>
            <div className={style.div}>
                <h1 className={style.titulo}>Henry Countries</h1>
                <div className={style.div2}>
                    <Link to="/home">
                        <button className={style.boton}>Welcome!!</button>
                    </Link>
                </div>
            </div>            
        </div>
    </div>
        
    )
}

export default Landing;