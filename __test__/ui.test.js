import { JSDOM } from 'jsdom';
import { FillUiWithData } from '../src/client/js/ui';

describe('', () => {
  function createDivWithId(document, id) {
    let element = document.createElement('div');
    element.id = id;
    document.body.appendChild(element);
    return element;
  }

  test('should ', () => {
    const documentMock = new JSDOM().window.document;

    const results = createDivWithId(documentMock, 'results');
    const confidence = createDivWithId(documentMock, 'confidence');
    const subjectivity = createDivWithId(documentMock, 'subjectivity');
    const irony = createDivWithId(documentMock, 'irony');

    const data = {
      confidence: 'CONFIDENCE',
      subjectivity: 'OBJECTIVE',
      irony: 'NOIRONY',
      sentence_list: [],
    };
    FillUiWithData(data, documentMock);

    expect(confidence.innerHTML).toBe('CONFIDENCE');
    expect(subjectivity.innerHTML).toBe('OBJECTIVE');
    expect(irony.innerHTML).toBe('NOIRONY');
  });
});
