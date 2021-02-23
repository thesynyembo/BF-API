const hopitaux = require('../models/ModelHopital');

//liste hôpitaux
exports.listeHopitaux = async (req, res) => {
	try {
		const hopital = await hopitaux.listeHopitaux();

		res.send(hopital);
	} catch (error) {
		throw error;
	}
};

//Récuperation d'un hôpital
exports.unHopital = async (req, res) => {
	try {
		const id = req.params.id;
		const hopital = await hopitaux.unHopital(id);

		res.send(hopital);
	} catch (error) {
		throw error;
	}
};

//Récuperation d'un hôpital avec specialité
exports.hopSpec = async (req, res) => {
	try {
		const id = req.params.id;
		const hopital = await hopitaux.hopSpec(id);

		res.send(hopital);
	} catch (error) {
		throw error;
	}
};

exports.Specialites = async (req, res) => {
	try {
		const id = req.params.id;
		const hopital = await hopitaux.Specialites(id);

		res.send(hopital);
	} catch (error) {
		throw error;
	}
};

// Supprimer un hôpital

exports.supprimer = async (req, res) => {
	try {
		const id = req.params.id;
		const hopital = hopitaux.delete(id);
		res.send(hopital);
	} catch (error) {
		throw error;
	}
};

//Modifier un hôpital

exports.modifier = async (req, res) => {
	try {
		const id = req.params.id;
		const hopital = await hopitaux.update(req.body.id, id);
		res.send(hopital);
	} catch (error) {
		throw error;
	}
};

exports.ajouter = async (req, res) => {
	try {
					const hopital = await hopitaux.ajouter(req.body)
					res.send(hopital);
	} catch (error) {
			throw error
	}
}
