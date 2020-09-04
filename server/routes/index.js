const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesControllers');
const testimonialesController = require('../controllers/testimonialesController');

module.exports = function() {
    router.get('/', homeController.consultasHomepage);
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    // Cuando se llena el formulario 
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}
