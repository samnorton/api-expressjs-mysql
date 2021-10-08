const usersQuery = require("../dbqueries/usersQuery");

exports.getAllUsers = async (req, res) => {
  try {
    let users = await usersQuery.getAllUsers();
    res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return;
  }
};
