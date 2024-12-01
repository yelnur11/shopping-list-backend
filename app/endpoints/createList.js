const ShoppingList = require('../models/ShoppingList');

module.exports = async (req, res, next) => {
  try {
    const { name, description, members } = req.body;

    const shoppingList = new ShoppingList({
      name,
      description,
      isOwner: req.user._id,
      members,
    });

    await shoppingList.save();

    res.status(201).json({
      message: 'Shopping list created successfully',
      list: shoppingList,
    });
  } catch (err) {
    next(err);
  }
};