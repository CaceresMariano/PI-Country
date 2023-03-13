const { Sequelize } = require('sequelize');
const Op = Sequelize.Op 
const { Country, Activity } = require('../db')

const getName = async (name) => {
  const country = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },include:{
        model: Activity,
        attributes:["name"],through:{attributes:[]}
      }
  })
  
  return country ? country : "No existe un pais con ese nombre";
};

module.exports = { getName };
