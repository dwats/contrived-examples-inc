const addNewUserField = require('../addNewUserField');

const { appendSupervisor, addFieldToUsers } = addNewUserField;

describe('addNewUserField', () => {
  describe('appendSupervisor()', () => {
    const mockUsers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

    it('should return an array', async () => {
      const newUsers = addNewUserField.appendSupervisor(mockUsers);
      expect(Array.isArray(newUsers)).toBeTruthy()
    });

    it('should return array of objects with the `supervisor` property set', async () => {
      const newUsers = addNewUserField.appendSupervisor(mockUsers);

      newUsers.forEach(user => {
        expect(user).toHaveProperty('supervisor');

        if (user.id === 1) {
          expect(user).toHaveProperty('supervisor', null);
        } else if (user.id === 3) {
          expect(user).toHaveProperty('supervisor', 1);
        } else {
          expect(user).toHaveProperty('supervisor', 3);
        }
      })
    });
  });

  describe('addFieldToUsers()', () => {
  });
});
