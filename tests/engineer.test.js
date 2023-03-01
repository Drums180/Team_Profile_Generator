const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with name, id, email, and GitHub username properties', () => {
      const engineer = new Engineer(
        'Jane Doe',
        456,
        'jane.doe@test.com',
        'janedoe'
      );

      expect(engineer.name).toEqual('Jane Doe');
      expect(engineer.id).toEqual(456);
      expect(engineer.email).toEqual('jane.doe@test.com');
      expect(engineer.github).toEqual('janedoe');
    });
  });

  describe('getRole', () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer(
        'Jane Doe',
        456,
        'jane.doe@test.com',
        'janedoe'
      );

      expect(engineer.getRole()).toEqual('Engineer');
    });
  });

  describe('getGithub', () => {
    it('should return the GitHub username', () => {
      const engineer = new Engineer(
        'Jane Doe',
        456,
        'jane.doe@test.com',
        'janedoe'
      );

      expect(engineer.getGithub()).toEqual('janedoe');
    });
  });
});
