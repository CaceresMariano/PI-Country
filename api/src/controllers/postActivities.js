const { Country, Activity } = require('../db')

const postAct = async (name, difficulty, duration, season, countries) => {
    const validacion = await Activity.findOne({
        where: {
            name: name,
        }
    })    
    if(!validacion){
    const newActivity = await Activity.create({ 
            name,
            difficulty,
            duration,
            season
    })
    const activityCountries = await Country.findAll({
        where:{
            name: countries
        }
    })
    newActivity.addCountry(activityCountries);
    
    return (`La actividad ${name} fue creada con exito`)

    }else{
        return (`La actividad ${name} ya existe`)
    }
}
module.exports = { postAct }