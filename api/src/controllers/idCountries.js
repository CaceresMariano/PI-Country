const { Country, Activity } = require('../db')

async function getId (id){
    const data = id.toUpperCase().toString()
    const countryId = await Country.findByPk(data,
      {include: [
        {model: Activity, attributes: ["name", "difficulty", "duration", "season"], through: { attributes: []}}
    ],})
     
    return countryId
}

module.exports = { getId }