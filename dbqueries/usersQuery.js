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

module.exports = usersQuery;
