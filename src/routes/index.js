const { Router } = require('express');

//Importamos los routers
const endpoints = require('./endpoints.js');

const router = Router();

// Configuramos los routers
router.use('/', endpoints);


module.exports = router;