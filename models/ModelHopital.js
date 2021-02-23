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
exports.hopSpec= async () => {
	// try {
	// 		const result = await connexion.query(`select *
  //       from
  //           hopitaux a
  //               inner join
  //           hopitaux_services b
  //               on a.id_hopital = b.hopital_id
  //               inner join 
  //           specialites c
  //               on b.specialite_id = c.id_specialite`);
	// 	return result;
	// } catch (error) {
	// 	throw error;
	// }
};


//Récuperation de l'hôpital avec les specialités
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


// ajouter un hôpital
exports.ajouter = async (hopital) => {
	try {
			const result = await connexion.query(`insert into hopitaux (name, adress, email,  site_web, heure_de_service, latitude, longitude, phone, description, image, president_surveillance, directeur, images, ville_id) values (?, ?, ?, ?,?, ?, ?,?,?,?,?,?, ?, ?)`,[
				hopital.name,
				hopital.adress,
				hopital.email,
				hopital.site_web,
				hopital.heure_de_service,
				hopital.latitude,
				hopital.longitude,
				hopital.phone,
				hopital.description, 	
				hopital.image,
				hopital.president_surveillance,
				hopital.directeur,
				hopital.images,		
				hopital.ville_id,
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
			`update hopitaux set name = ?, adress = ?,email = ?, site_web = ?, heure_de_service=?, latitude = ?, longitude = ?, phone = ?, description = ?,image=? ,president_surveillance = ?, directeur = ?,images=?, ville_id = ? where id_hopital = ?`,
			[
				hopital.name,
				hopital.adress,
				hopital.email,
				hopital.site_web,
				hopital.heure_de_service,
				hopital.latitude,
				hopital.longitude,
				hopital.phone,
				hopital.description, 	
				hopital.image,
				hopital.president_surveillance,
				hopital.directeur,
				hopital.images,		
				hopital.ville_id,
				id
			]
		);
		return result;
	} catch (error) {
		throw error;
	}
};
