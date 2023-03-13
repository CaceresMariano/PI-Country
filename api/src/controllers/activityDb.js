const { Activity } =require('../db');

const getActivity = async () => {
    const dbInfo = await Activity.findAll()
    const activities = dbInfo.map(e =>{
        return {
            id: e.id,
            name: e.name
        }
    })
    return activities
}


module.exports = { getActivity }