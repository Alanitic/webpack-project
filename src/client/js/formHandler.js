const handleSubmit = (event) => {
  event.preventDefault();
  const toAnalyze = document.querySelector('#analyze').value;
  Client.ToggleDisabled();
  if (validate(toAnalyze)) {
    Client.postData('http://localhost:8081/sentiment', {
      text: toAnalyze,
    }).then((res) => {
      const { data } = res;
      Client.ToggleDisabled();
      Client.FillUiWithData(data, document);
    });
  } else {
    alert('Please provide a valid text');
  }
};

const validate = (text) => {
  const isValid = /^[a-zA-Z0-9\s/.,]{1,200}$/.test(text);
  return isValid;
};

export { handleSubmit, validate };
