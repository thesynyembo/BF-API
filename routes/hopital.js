const express = require('express');
const router = express.Router();
const hopitaux = require('../controllers/ControllerHopital');

//liste des hôpitaux
router.get('/', hopitaux.listeHopitaux);

// Récupération d'un hôpital
router.get('/:id', hopitaux.unHopital);

// un jonction table hôpitaux spécialités
router.get('/hopSpec/AllHopitalSpecialite', hopitaux.hopSpec);
router.get('/Specialites/:id', hopitaux.Specialites);

// Ajouter un hôpital
router.post("/ajouter", hopitaux.ajouter)

// modifier un hôpital
router.put('/modifier/:id', hopitaux.modifier);

// supprimer un hôpital
router.delete('/supprimer/:id', hopitaux.supprimer);

module.exports = router;
