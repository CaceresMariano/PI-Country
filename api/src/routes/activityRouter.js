const { Router } = require('express');
const activityRouter = Router();
const {postActivities, getActivities} = require('../handlers/activitiesHandlers');



activityRouter.post('/', postActivities);
activityRouter.get('/', getActivities)

module.exports = activityRouter