import axios from 'axios';

export default {
  signUp,
  getMarkets,
  getClient,
  buy,
  sell,
  getOpenPositions,
  login
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
        .then((response) => checkStatus(response));
}

function login(username) {
    return axios({
        url: `https://glacial-plateau-36826.herokuapp.com/workshop/client/login/${username}`,
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then((response) => checkStatus(response));
}

function getMarkets() {
  return axios({
    url: 'https://glacial-plateau-36826.herokuapp.com/workshop/marketData/allMarkets',
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => checkStatus(response));
}

function getClient(clientId) {
  return axios({
    url: `https://glacial-plateau-36826.herokuapp.com/workshop/client/${clientId}`,
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => checkStatus(response));
}

function buy(marketId, clientId) {
  return axios({
    url: `https://glacial-plateau-36826.herokuapp.com/workshop/openPositions/${clientId}`,
    method: 'POST',
    data: {
      marketId: marketId,
      buySize: 1
    },
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => checkStatus(response));
}

function getOpenPositions(clientId) {
  return axios({
    url: `https://glacial-plateau-36826.herokuapp.com/workshop/openPositions/${clientId}`,
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => checkStatus(response));
}

function sell(positionId, clientId) {
  return axios({
    url: `https://glacial-plateau-36826.herokuapp.com/workshop/openPositions/${clientId}/${positionId}`,
    method: 'POST',
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => checkStatus(response));
}
