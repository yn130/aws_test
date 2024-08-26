const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//     return sequelize.define('User', {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//     });
//     freezeTableName: true, 
// };


module.exports = (sequelize) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    }, {
        freezeTableName: true, // 이 옵션을 필드 정의 밖에 추가해야 합니다.
        timestamps: true, // createdAt, updatedAt 필드를 자동으로 추가
    });
};
