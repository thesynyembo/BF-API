const express = require('express');
const router = express.Router();
const specialites = require('../controllers/contollerSpecialite');

//liste des spécialités
router.get('/', specialites.listeSpecialite);
// une spécialité
router.get('/:id', specialites.uneSpecialite);
// modifier une spécialité
router.post('/modifier/:id', specialites.modifier);
// supprimer une spécialité
router.get('/supprimer/:id', specialites.supprimer);

module.exports = router;
