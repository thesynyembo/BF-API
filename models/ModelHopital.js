const connexion = require('./db_connect');

//afficher la liste des hopitaux
exports.listeHopitaux = async () => {
	try {
		const result = await connexion.query(
			'select hopitaux.id_hopital as id, hopitaux.name as name, hopitaux.adress as adress, hopitaux.email as email,hopitaux.image as image, hopitaux.phone as phone, hopitaux.heure_de_service as heure_de_service,hopitaux.description as description, hopitaux.directeur as directeur, hopitaux.president_surveillance as president_surveillance, hopitaux.images as images, hopitaux.latitude as latitude, hopitaux.longitude as longitude,hopitaux.ville_id as ville_id from hopitaux join villes on hopitaux.ville_id=villes.id_ville;'
		);
		return result;
	} catch (error) {
		throw error;
	}
};

//afficher un hopitaux
exports.unHopital = async (id) => {
	try {
		const result = await connexion.query(
			`select hopitaux.id_hopital as id, hopitaux.name as name, hopitaux.adress as adress,hopitaux.email as email,hopitaux.image as image, hopitaux.heure_de_service as heure_de_service, hopitaux.directeur as directeur, hopitaux.president_surveillance as president_surveillance,hopitaux.phone as phone, hopitaux.site_web as site_web,hopitaux.description as description, hopitaux.ville_id as ville, hopitaux.images as images, hopitaux.latitude as latitude, hopitaux.longitude as longitude from hopitaux join villes on hopitaux.ville_id=villes.id_ville where hopitaux.id_hopital = ?`,
			[ id ]
		);
		return result;
	} catch (error) {
		throw error;
	}
};



//jonction hop and spec
exports.hopSpec = async (id) => {
	try {
			const result = await connexion.query(`select *
        from
            hopitaux a
                inner join
            hopitaux_services b
                on a.id_hopital = b.hopital_id
                inner join 
            specialites c
                on b.specialite_id = c.id_specialite`,
								[ id ]);
		return result;
	} catch (error) {
		throw error;
	}
};

exports.Specialites = async (id) => {
	try {
	
		const result = await connexion.query(`select *
        from
            hopitaux a
                inner join
            hopitaux_services b
                on a.id_hopital = b.hopital_id
                inner join 
            specialites c
                on b.specialite_id = c.id_specialite
								where a.id_hopital=?`,
								[ id ]);
		return result;
	} catch (error) {
		throw error;
	}
}

// ajouter un etablissement
exports.ajouter = async (hopital) => {
	try {
			const result = await connexion.query(`insert into hopitaux (name, adress, email, image, heure_de_service, directeur, president_surveillance,phone, site_web, description, ville_id, images, latitude, longitude) values (?, ?, ?, ?,?, ?, ?,?,?,?,?,?, ?, ?)`,[
				hopital.name,
				hopital.adress,
				hopital.email,
				hopital.image,
				hopital.heure_de_service,
				hopital.directeur,
				hopital.president_surveillance,
				hopital.phone,
				hopital.site_web,			
				hopital.descreiption,
				hopital.ville_id,
				hopital.images,
				hopital.latitude,
				hopital.longitude,
			]);
			return result;
	} catch (error) {
			throw error
	}
}
//supprimer un hôpital

exports.delete = async (id) => {
	try {
		const result = await connexion.query(`delete from hopitaux where id_hopital = ?`, [ id ]);
		return result;
	} catch (error) {
		throw error;
	}
};

// modifier un hôpital

exports.update = async (hopital, id) => {
	try {
		const result = await connexion.query(
			`update hopitaux set name = ?, adress = ?,heure_de_service=?,  email = ?, phone = ?, site_web = ?, heure = ?, directeur = ?, president_surveillance = ?,images=?,heure_de_service!?, ville_id = ?, latitude = ?, longitude = ? where id_hopital = ?`,
			[
				hopital.name,
				hopital.adress,
				hopital.email,
				hopital.phone,
				hopital.site_web,
				hopital.images,
				hopital.heure_de_service,
				hopital.directeur,
				hopital.president_surveillance,
				hopital.ville_id,
				hopital.latitude,
				hopital.longitude,
				id
			]
		);
		return result;
	} catch (error) {
		throw error;
	}
};
