const handleSubmit = (event) => {
  event.preventDefault();
  const toAnalyze = document.querySelector('#analyze').value;
  validate(toAnalyze);
};

const validate = (text) => {
  const exp = /^[a-zA-Z0-9\s/.,]{1,100}$/.test(text);
  console.log(exp);
};

export { handleSubmit };
