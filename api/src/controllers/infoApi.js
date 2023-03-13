const axios = require('axios');

const getAll = async () => {
    const api = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = api.data.map((e) =>{        
        return {
            id: e.cca3 ? e.cca3 : ('Id not found'),
            name: e.name.common ? e.name.common : ('Name not found'),
            image: e.flags ? e.flags[0] : ("Image not found"),
            continents: e.continents ? e.continents[0] : ("Continents not found"),
            capital: e.capital ? e.capital[0] : "Capital not found",
            subregion: e.subregion ? e.subregion : ('Subregion not found'),
            area: e.area ? e.area : ('Area not found'),
            population: e.population 
            
        }
    })
      
    return apiInfo    
}


 
module.exports = { getAll };
