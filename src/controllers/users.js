const fs = require('fs-extra');
const masterUser = require('../../.fixtures/users.json');

module.exports = {
  getUsers,
  createUser,
  updateUser
};

const USER_PATH = './data/users.json';

/**
 * get all users
 *
 * @async
 * @returns {array}
 */
async function getUsers(useMaster = false) {
  if (useMaster) return masterUser;

  const users = await fs.readJson(USER_PATH)
    .catch((error) => {
      return masterUser;
    });

  return users;
}

/**
 * Create new user record
 *
 * @async
 * @param {Object} user
 * @returns {Object}
 */
async function createUser(user) {
  if (!user.id) throw Error('user must have id')
  const users = await getUsers();
  const dupes = users.filter(existing => existing.id === user.id);
  if (dupes.length) throw Error('cannot have duplicate ids')

  await fs.writeJson(USER_PATH, [...users, user])
    .catch(console.error)

  return user
}

/**
 * Replace user with a new record. Full record replace update.
 *
 * @async
 * @param {Object} user
 * @returns {Object}
 */
async function updateUser(user) {
  const users = await getUsers();
  const others = users.filter(existing => existing.id !== user.id);

  await fs.writeJson(USER_PATH, [...others, user])
    .catch(console.error)

  return user
}
