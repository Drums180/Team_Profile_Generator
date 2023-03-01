const Intern = require('../lib/intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with name, id, email, and school properties', () => {
      const intern = new Intern(
        'Bob Johnson',
        789,
        'bob.johnson@test.com',
        'University of California, Los Angeles'
      );

      expect(intern.name).toEqual('Bob Johnson');
      expect(intern.id).toEqual(789);
      expect(intern.email).toEqual('bob.johnson@test.com');
      expect(intern.school).toEqual('University of California, Los Angeles');
    });
  });

  describe('getRole', () => {
    it("should return 'Intern'", () => {
      const intern = new Intern(
        'Bob Johnson',
        789,
        'bob.johnson@test.com',
        'University of California, Los Angeles'
      );

      expect(intern.getRole()).toEqual('Intern');
    });
  });

  describe('getSchool', () => {
    it('should return the school name', () => {
      const intern = new Intern(
        'Bob Johnson',
        789,
        'bob.johnson@test.com',
        'University of California, Los Angeles'
      );

      expect(intern.getSchool()).toEqual('University of California, Los Angeles');
    });
  });
});
