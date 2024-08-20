const sequelize = require('../config/database');
const { Model, DataTypes } = require('sequelize');

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  use_in_menu: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
}, {
  sequelize,
  modelName: 'category',
  timestamps: true, // gera as colunas created_at e updated_at
});

module.exports = Category;