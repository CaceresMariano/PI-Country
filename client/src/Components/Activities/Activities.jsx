
const Actividades = (props) =>{

    return (
        <div>
            <p>Actividades: {props.name}</p>
            <p>Dificultad:{props.difficulty}</p>
            <p>Duracion:{props.duration}</p>
            <p>Temp:{props.season}</p>
        </div>
    )


}
export default Actividades;