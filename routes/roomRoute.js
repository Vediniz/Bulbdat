const router = require('express').Router();
const roomController = require('../controllers/RoomController'); 
const { userVerification } = require('../middlewares/AuthMiddleware');

router.post('/rooms', userVerification, roomController.createRoom);

module.exports = router;
