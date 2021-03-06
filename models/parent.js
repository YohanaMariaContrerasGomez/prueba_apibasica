module.exports = (sequelize, DataTypes) => {
	const Parent = sequelize.define("Parent", {
		name: {
			type: DataTypes.STRING(30),
			allowNull: false,
			validate: {
				notEmpty: {msg: "Faltan datos por ingresar"}
			}
		},
		surname: {
			type: DataTypes.STRING(30),
			allowNull: false,
			validate: {
				notEmpty: {msg: "Faltan datos por ingresar"}
			}
		},
		email: {
			type: DataTypes.STRING,
			unique: true
		}
	});

	Parent.associate = models => {
		Parent.hasMany(models.User, {
			onDelete: "cascade"
		});
	};

	return Parent;
};