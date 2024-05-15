import axios from 'axios';
import * as Constants from '../constants';

export async function getProvidersListData() {
  let data;
  await axios.get(Constants.API_BASE_URL + Constants.API_PROVIDER_LIST_FRAGMENT, {
    headers: Constants.API_BASE_HEADERS
  })
    .then((response) => {
      data = response.data.response.matches;
    })
    .catch(error => {
      console.error(error);
    });

  return data;
}

export async function getProviderFullData(providerID: string) {
  let data;
  await axios.get(Constants.API_BASE_URL + Constants.API_PROVIDER_DATA_FRAGMENT + providerID, {
    headers: Constants.API_BASE_HEADERS
  })
    .then((response) => {
      data = response.data.response;
    })
    .catch(error => {
      console.error(error);
    });

  return data;
}
