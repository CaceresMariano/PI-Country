import style from "./Card.module.css"
import { Link } from "react-router-dom";


const Card = (props) => {
    return (
        <div className={style.card}>
            <Link to={{pathname: '/detail', state:{id: props.id}}}>
                <img className={style.img} src={props.image} alt="Imagen Country" />
            </Link>
                <ul>
                    <li className={style.info}>{props.name} </li>
                    <li className={style.info}>{props.continent} </li>
                </ul>
        </div>
    )
}
export default Card;