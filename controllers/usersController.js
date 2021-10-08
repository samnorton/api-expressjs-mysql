const usersQuery = require("../dbqueries/usersQuery");

exports.getAllUsers = async (req, res) => {
  try {
    let users = await usersQuery.getAllUsers();
    res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return;
  }
};

exports.getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    let user = await usersQuery.getUserById(id);

    if (!user) {
      return res.json({
        success: false,
        message: "Record not found!",
      });
    }

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    return;
  }
};
