const { getName } = require('../controllers/nameCountries');
const { getId } = require('../controllers/idCountries');
const { countryDb } = require('../controllers/infoDb');

const getCountries = async (req, resp) => {
    try {
        const { name } = req.query
        const resultado = name ? await getName(name) : await countryDb()
        resp.status(200).json(resultado)
    } catch (error) {
        resp.status(404).json({error: error.message})        
    }    
};

const getCountryId = async (req, resp) => {
    try {
        const {id} = req.params 
        const idCountry = await getId(id)   
        resp.status(200).json(idCountry)

    } catch (error) {
        resp.status(404).json({error: error.message})        
    }
   
};
module.exports = { getCountries, getCountryId }