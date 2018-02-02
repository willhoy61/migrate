const sequelize = require("sequelize");
const Schema = sequelize.Schema;
const passportLocalSequelize = require("passport-local-sequelize");


const sequelize = new sequelize('test_db', 'root', 'root', {
	host: 'localhost', dialect: 'mysql'
})

const User = sequelize.define('users', {
	ID: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
		},
		userid: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len:[1]
			}
		},
		token: {
			type: DataTypes.STRING,
			allowNull: false,
			len: [1]
		},
		username: DataTypes.STRING,
		allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
});

module.exports = sequelize.model('User', User);



// CREATE TABLE users (
// ID int NOT NULL AUTO_INCREMENT,
// userid VARCHAR(255),
// token VARCHAR (255),
// username VARCHAR(255),
// email VARCHAR(255),
// PRIMARY KEY (ID)
// );
