const ToggleDisabled = () => {
  const submitBtn = document.querySelector('.btn-submit');
  submitBtn.toggleAttribute('disabled');
};

const FillUiWithData = (data, document) => {
  const results = document.querySelector('#results');
  const fragment = document.createDocumentFragment();
  document.querySelector('#confidence').innerHTML = data.confidence;
  document.querySelector('#subjectivity').innerHTML = data.subjectivity;
  document.querySelector('#irony').innerHTML = data.irony;
  for (let item of data.sentence_list) {
    const text = document.createElement('strong');
    text.innerHTML = 'Text:';
    const contentText = document.createElement('div');
    contentText.innerHTML = item.text;
    const confidence = document.createElement('strong');
    confidence.innerHTML = 'Confidence:';
    const contentConf = document.createElement('div');
    contentConf.innerHTML = item.confidence;
    const breakLine = document.createElement('br');
    const divisor = document.createElement('hr');
    fragment.appendChild(text);
    fragment.appendChild(contentText);
    fragment.appendChild(confidence);
    fragment.appendChild(contentConf);
    fragment.appendChild(breakLine);
    fragment.appendChild(divisor);
  }
  results.appendChild(fragment);
};

export { ToggleDisabled, FillUiWithData };
