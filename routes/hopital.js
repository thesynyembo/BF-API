const express = require('express');
const router = express.Router();
const hopitaux = require('../controllers/ControllerHopital');

//liste des hôpitaux
router.get('/', hopitaux.listeHopitaux);
// un seul hôpital
router.get('/:id', hopitaux.unHopital);
// un jonction hôpital spécialité
router.get('/hopSpec/:id', hopitaux.hopSpec);
router.get('/Specialites/:id', hopitaux.Specialites);
// Ajouter
router.post("/ajouter", hopitaux.ajouter)
// modifier hôpital
router.post('/modifier/:id', hopitaux.modifier);
// supprimer un hôpital
router.delete('/supprimer/:id', hopitaux.supprimer);

module.exports = router;
