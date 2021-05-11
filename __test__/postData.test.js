import 'regenerator-runtime/runtime';
import { postData } from '../src/client/js/postData';

describe('Posting data to backend', () => {
  test('should return value', async () => {
    const result = await postData('http://localhost:8081/sentiment', {
      text: 'example',
    });
    expect(result).not.toBeNull();
    expect(result.status).toBe(200);
  });
  test('should return 400', async () => {
    try {
      const result = await postData('http://localhost:8081/sentiment');
    } catch (e) {
      expect(e).not.toBeNull();
      expect(e.response.status).toBe(400);
    }
  });
});
