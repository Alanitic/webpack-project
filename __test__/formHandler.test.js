import { validate } from '../src/client/js/formHandler';

describe('Validate input data from the user', () => {
  test('should return true', () => {
    const result = validate('A valid text');
    expect(result).toBeTruthy();
  });
  test('should return false', () => {
    const result = validate('A valid text@');
    expect(result).not.toBeTruthy();
  });
});
