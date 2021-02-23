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

//Récuperation hôpital avec specialité
exports.hopSpec = async (req, res) => {
	// try {
	// 	// const id = req.params.id;
	// 	const hopital = await hopitaux.hopSpec();

	// 	res.send(hopital);
	// } catch (error) {
	// 	throw error;
	// }
};


//Récuperation de l'hôpital avec les spécialites
exports.Specialites = async (req, res) => {
	try {
		const id = req.params.id;
		const hopital = await hopitaux.Specialites(id);

		const specialite = hopital.map(item=>{
			return {
				id_specialite:item.id_specialite,
				nom_specialite: item.nom 
			}
		})

		const resultat ={
			id_hopital: 8,
			name: hopital[0].name,
			adress: hopital[0].adress,
			email: hopital[0].email,
			site_web: hopital[0].site_web,
			heure_de_service: hopital[0].heure_de_service,
			latitude: hopital[0].latitude,
			longitude: hopital[0].longitude,
			phone: hopital[0].phone,
			description: hopital[0].description,
			image: hopital[0].image,
			president_surveillance: hopital[0].president_surveillance,
			directeur: hopital[0].directeur,
			images: hopital[0].images,
			ville_id: hopital[0].ville_id,
			id_hopitaux_services: hopital[0].id_hopitaux_services,
			specialite_id: hopital[0].specialite,
			hopital_id: hopital[0].hopital_id,
			specialite: specialite
		}

		res.send(resultat);
	} catch (error) {
		throw error;
	}
};


// Supprimer un hôpital
exports.supprimer = async (req, res) => {
	try {
		const id = req.params.id;
		const hopital = hopitaux.delete(id);
		res.send({response: "L'élément a été supprimé"});
	} catch (error) {
		throw error;
	}
};


//Modifier un hôpital
exports.modifier = async (req, res) => {
	try {
		const id = req.params.id;
		const hopital = await hopitaux.update(req.body, id);
		res.send({response:"La modification a réussi"});
	} catch (error) {
		throw error;
	}
};

//Ajouter un hôpital
exports.ajouter = async (req, res) => {
	try {
					const hopital = await hopitaux.ajouter(req.body)
					res.send({response:"L'ajout est effectué"});
	} catch (error) {
			throw error
	}
}
