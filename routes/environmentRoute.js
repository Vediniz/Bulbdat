const {
    getEnvironments,
    getEnvironment,
    createEnvironment,
    updateEnvironment,
    deleteEnvironment
} = require('../controllers/EnvironmentController'); 
// const { userVerification } = require('../middlewares/AuthMiddleware');

const router = require('express').Router();

router.get('/',  getEnvironments);

router.get('/:id', getEnvironment)

router.post('/', createEnvironment);


router.delete('/:id', deleteEnvironment) 

router.patch('/:id', updateEnvironment)

module.exports = router;
