const axios = require('axios');

const postRequest = async (url = '') => {
  return await axios.post(url).catch((error) => {
    console.error(error);
  });
};

exports.postRequest = postRequest;
