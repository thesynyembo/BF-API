const connexion = require('./db_connect');

//afficher la liste des spécialités
exports.listeSpecialite = async () => {
	try {
		const result = await connexion.query(
			'select specialites.id_specialite as id, specialites.nom as nom,specialites.description as description from specialites'
		);
		return result;
	} catch (error) {
		throw error;
	}
};

//afficher une spécialité
exports.uneSpecialite = async (id) => {
	try {
		const result = await connexion.query(
			`select specialites.id_specialite as id, specialites.nom as nom, specialites.description as description from specialites where specialites.id_specialite = ?`,
			[ id ]
		);
		return result;
	} catch (error) {
		throw error;
	}
};

//supprimer une spécialité

exports.delete = async (id) => {
	try {
		const result = await connexion.query(`delete from specialites where specialites.id_specialite = ?`, [ id ]);
		return result;
	} catch (error) {
		throw error;
	}
};

// modifier une spécialité

exports.update = async (specialite, id) => {
	try {
		const result = await connexion.query(
			`update specialites set nom = ?, description = ? where specialites.id_specialite = ?`,
			[ specialite.nom, specialite.description, id ]
		);
		return result;
	} catch (error) {
		throw error;
	}
};
