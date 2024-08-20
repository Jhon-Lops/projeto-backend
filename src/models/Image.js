const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


    const Image = sequelize.define('Image', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Products', // Nome da tabela de produtos
          key: 'id', // Chave primária da tabela de produtos
        },
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0, 
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
    }, {
      tableName: 'images', 
      timestamps: true,
    });
  
    Image.associate = (models) => {
      Image.belongsTo(models.Product, {
        foreignKey: 'product_id',
        as: 'product', // Nome da associação
      });
    };

module.exports = Image;