import Validator from '../PasswordValidator'

describe('Password Validator', () => {
    it('should be valid', () => {
      const password = "123abs";
      const result = Validator(password);
      expect(result.valid).toBe(true);
    })
})