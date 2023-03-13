const { postAct } = require('../controllers/postActivities');
const { getActivity } = require('../controllers/activityDb');


const postActivities = async (req, resp) => {
    try {
        const { name, 
            difficulty, 
            duration, 
            season,
            countries } = req.body

        const newActivity = await postAct(name, difficulty, duration,season, countries)
        resp.status(200).json(newActivity)
    } catch (error) {
        resp.status(404).json({error: error.message})
        
    }
}
const getActivities = async (req, resp) => {
    try {        
        const allActivities = await getActivity();
        resp.status(200).json(allActivities)
    
    } catch (error) {
        resp.status(404).json({error: error.message})
    }
}

module.exports = { postActivities, getActivities }