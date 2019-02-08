const fs = require('fs-extra');
const masterDepartments = require('../../.fixtures/departments.json');

module.exports = {
  getDepartments
}

const DEPARTMENTS_PATH = './data/departments.json';

/**
 * get all departments
 *
 * @async
 * @returns {array}
 */
async function getDepartments(useMaster = false) {
  if (useMaster) return masterDepartments;

  const departments = await fs.readJson(DEPARTMENTS_PATH)
    .catch((error) => {
      console.error(error);
      console.error('falling back to master copy of departments');
      return masterDepartments;
    });

  return departments;
}
