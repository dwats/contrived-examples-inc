/**
 * When this company was founded 108 years ago there were no supervisors. But the times have changed and it's been determined
 * that a supervisor would increase profit margins by 3.7%. Rob (id 3) has the most charisma and is a huge brown noser so he's
 * the most qualified for the job.
 *
 * - Add a new 'supervisor' field to all of the users in the database.
 * - Bob (id 1) is the owner of the company so he doesn't have (null) a `supervisor`.
 * - Rob's (id 3) `supervisor` is Bob.
 * - All other users' `supervisor` is Rob.
 *
 * While this is a contrived task, we want to build the logic for setting the `supervisor` ids into the `appendSupervisor` function.
 */
const users = require('../controllers/users');

module.exports = {
  addFieldToUsers,
  appendSupervisor
}

/**
 * Add new field to all users
 *
 * @async
 * @returns {Array}
 */
async function addFieldToUsers() {
  try {
    const allUsers = await users.getUsers();

    const updatedUsers = appendSupervisor(allUsers);
    const promises = updatedUsers.map(user => users.updateUser(user));

    return Promise.all(promises);
  } catch (error) {
    console.log('error updating users')
    throw(error);
  }
}

/**
 * Append `supervisor` property onto each object in an array, setting the value at the time of edit
 *
 * @param {Array} users
 * @returns {Array} Array of users with `supervisor` appended.
 */
function appendSupervisor(users) {
  // YOUR WORK HERE...

  return;
}
