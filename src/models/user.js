module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        id: {
            type: type.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                len: [2, 50] // Using len instead of min and max
            }
        },
        lastName: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                len: [2, 50] // Using len instead of min and max
            }
        },
        address: {
            type: type.STRING(150),
            validate: {
                len: [0, 150] // Using len instead of max
            }
        },
        email: {
            type: type.STRING(60),
            validate: {
                isEmail: true
            }
        },
        createdAt: {
            type: type.DATE,
            defaultValue: type.literal('CURRENT_TIMESTAMP') // Setting default value to current timestamp
        },
        updatedAt: {
            type: type.DATE,
            defaultValue: type.literal('CURRENT_TIMESTAMP'), // Setting default value to current timestamp
            onUpdate: type.literal('CURRENT_TIMESTAMP') // Updating updatedAt on every update
        }
    }, {
        timestamps: false, // Disabling sequelize's default timestamps
    });
};
