const { Router } = require("express");
const { getCountries, getCountryId } = require('../handlers/countriesHandlers');

const countryRouter = Router();

countryRouter.get('/', getCountries);

countryRouter.get('/:id', getCountryId);





module.exports = countryRouter