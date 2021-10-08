const pool = require("../ config/dbConfig");

const util = require("util");
const query = util.promisify(pool.query).bind(pool);

let usersQuery = {};

usersQuery.getAllUsers = async () => {
  try {
    const results = await query("SELECT * FROM users");
    return results;
  } catch (error) {
    return error;
  }
};

usersQuery.getUserById = async (id) => {
  try {
    const results = await query(
      `SELECT id, name, email, avatar FROM users WHERE id=?`,
      [id]
    );
    return results[0];
  } catch (error) {
    return error;
  }
};

usersQuery.registerUser = async (name, email, avatar, password) => {
  try {
    const results = await query(
      `INSERT INTO users (name, email, avatar, password) VALUES(?, ?, ?, ?)`,
      [name, email, avatar, password]
    );
    return results;
  } catch (error) {
    return error;
  }
};

module.exports = usersQuery;
