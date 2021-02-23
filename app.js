const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const hopital = require('./routes/hopital');
const specialite = require('./routes/specialite');

dotenv.config();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/Map', hopital);
app.use('/Specialite', specialite);

app.listen(process.env.PORT, () => {
	console.log(`Le serveur tourne sur le port: ${process.env.PORT}`);
	console.log(`Environement: ${process.env.ENV}`);
	console.log(`db_name: ${process.env.DB_NAME}`);
	console.log(`db_host: ${process.env.DB_HOSTNAME}`);
	console.log(`db_user: ${process.env.DB_USER}`);
	console.log(`db_pwd: ${process.env.DB_PASSWORD}`);
});
