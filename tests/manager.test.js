const Manager = require('../lib/manager');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create an object with name, id, email, and office number properties', () => {
      const manager = new Manager(
        'John Smith',
        123,
        'john.smith@test.com',
        100
      );

      expect(manager.name).toEqual('John Smith');
      expect(manager.id).toEqual(123);
      expect(manager.email).toEqual('john.smith@test.com');
      expect(manager.officeNumber).toEqual(100);
    });
  });

  describe('getRole', () => {
    it("should return 'Manager'", () => {
      const manager = new Manager(
        'John Smith',
        123,
        'john.smith@test.com',
        100
      );

      expect(manager.getRole()).toEqual('Manager');
    });
  });
});
