const { getAll } = require("./infoApi");
const { Country, Activity } = require("../db");

async function countryDb() {
  const data = await getAll();

  const dbInfo = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
      attributes: [],
      },
    },
  });

  const country = dbInfo.map(e => {
    return {
      id: e.id,
          name: e.name,
          image: e.image,
          continent: e.continents,
          activities: e.activities.map((e) => e.name),
          population: e.population,
    }
  })

  if (!dbInfo.length) {
    const create = await Country.bulkCreate(data, {
      where: {
        createdInDb: true,
      },
    });
    return create;
  } else {
    return country;
  }
}

module.exports = { countryDb };
