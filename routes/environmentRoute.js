const router = require('express').Router();
const {getUserEnvironments, createEnvironment}= require('../controllers/EnvironmentController'); 
const { userVerification } = require('../middlewares/AuthMiddleware');

router.get('/', userVerification, getUserEnvironments);
router.post('/create-environments', userVerification, createEnvironment);


module.exports = router;
