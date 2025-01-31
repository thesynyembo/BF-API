const specialites = require('../models/modelSpecialite');

//liste spécialités
exports.listeSpecialite = async (req, res) => {
	try {
		const specialite = await specialites.listeSpecialite();

		res.send(specialite);
	} catch (error) {
		throw error;
	}
};

//Récuperation d'une spécialités
exports.uneSpecialite = async (req, res) => {
	try {
		const id = req.params.id;
		const specialite = await specialites.uneSpecialite(id);

		res.send(specialite);
	} catch (error) {
		throw error;
	}
};
// Supprimer une spécialié

exports.supprimer = async (req, res) => {
	try {
		const id = req.params.id;
		const specialite = specialites.delete(id);
		res.send({response: "L'élément a été supprimé"});
	} catch (error) {
		throw error;
	}
};

//Ajouter un hôpital
exports.ajouter = async (req, res) => {
	try {
					const specialite = await specialites.ajouter(req.body)
					res.send({response:"L'ajout est effectué"});
	} catch (error) {
			throw error
	}
}

//Modifier une spécialié
exports.modifier = async (req, res) => {
	try {
		const id = req.params.id;
		const specialite = await specialites.uneSpecialite(id);
		res.send({response:"La modification a réussi"});
	} catch (error) {
		throw error;
	}
};
