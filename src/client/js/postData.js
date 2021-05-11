const fetch = require('axios');

const postData = async (url = '', data = {}) => {
  return await fetch.post(url, data).catch((error) => {
    console.error(error);
  });
};

export { postData };
