const { Category } = require('../models');

const getCategories = async (req, res) => {
  try {
    const { limit = 12, page = 1, fields = 'name,slug', use_in_menu } = req.query;

    // Convertendo limit e page para números
    const limitValue = limit === '-1' ? null : parseInt(limit, 10);
    const offsetValue = (page - 1) * limitValue;

    // Construindo a condição de filtragem
    const where = {};
    if (use_in_menu) {
      where.use_in_menu = use_in_menu === 'true'; // Converte para booleano
    }

    // Selecionando os campos desejados
    const attributes = fields.split(',');

    // Buscando as categorias
    const categories = await Category.findAndCountAll({
      where,
      limit: limitValue,
      offset: offsetValue,
      attributes,
    });

    // Retornando a resposta
    return res.status(200).json({
      total: categories.count,
      data: categories.rows,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getCategories,
};