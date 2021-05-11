import 'regenerator-runtime/runtime';
import { postData } from '../src/client/js/postData';

describe('Posting data to backend', () => {
  test('should return value', async () => {
    const result = await postData('http://localhost:8081/sentiment', {
      text: 'example',
    });
    console.log(result);
  });
});
