const handleSubmit = (event) => {
  event.preventDefault();
  const toAnalyze = document.querySelector('#analyze').value;
  if (validate(toAnalyze)) {
    Client.postData('http://localhost:8081/sentiment', {
      text: toAnalyze,
    });
  } else {
    alert('Please provide a valid text');
  }
};

const validate = (text) => {
  const isValid = /^[a-zA-Z0-9\s/.,]{1,100}$/.test(text);
  return isValid;
};

export { handleSubmit };
