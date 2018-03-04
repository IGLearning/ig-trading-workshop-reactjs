import axios from 'axios';

export default {
  signUp,
  getMarkets,
  getClient
};

function checkStatus(response) {
  if (response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function signUp(username) {
  return axios({
    url: 'https://glacial-plateau-36826.herokuapp.com/workshop/client/createClient',
    method: 'POST',
    data: {userName: username},
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => checkStatus(response))
    .catch((error) => console.log(error));
}

function getMarkets() {
  return axios({
    url: 'https://glacial-plateau-36826.herokuapp.com/workshop/marketData/allMarkets',
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => checkStatus(response))
    .catch((error) => console.log(error));
}

function getClient(clientId) {
  return axios({
    url: 'https://glacial-plateau-36826.herokuapp.com/workshop/client/{clientId}',
    method: 'GET',
    headers: {
      Accept: 'application/json'
    },
    params: {
      clientId
    }
  })
    .then((response) => checkStatus(response))
    .catch((error) => console.log(error));
}
