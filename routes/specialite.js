const express = require('express');
const router = express.Router();
const specialites = require('../controllers/contollerSpecialite');

//liste des spécialités
router.get('/', specialites.listeSpecialite);

// Récupération d'une spécialité
router.get('/:id', specialites.uneSpecialite);

// Ajouter un hôpital
router.post("/ajouter", specialites.ajouter)

// modifier une spécialité
router.put('/modifier/:id', specialites.modifier);

// supprimer une spécialité
router.delete('/supprimer/:id', specialites.supprimer);

module.exports = router;
