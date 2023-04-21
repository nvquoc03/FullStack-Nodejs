'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Allcode.hasMany(models.User, { foreignKey: 'positionId', as: 'positionData' });
            Allcode.hasMany(models.User, { foreignKey: 'gender', as: 'genderData' });

            Allcode.hasMany(models.Schedule, { foreignKey: 'timeType', as: 'timeTypeData' });

            Allcode.hasMany(models.Doctor_Infor, { foreignKey: 'priceId', as: 'priceIdData' });
            Allcode.hasMany(models.Doctor_Infor, { foreignKey: 'paymentId', as: 'paymentIdData' });
            Allcode.hasMany(models.Doctor_Infor, { foreignKey: 'provinceId', as: 'provinceIdDta' });


        }
    };
    Allcode.init({
        keyMap: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING


    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};