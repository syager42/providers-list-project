export const API_BASE_URL = 'https://amenity-web-api-test-beta01.azurewebsites.net';
export const API_KEY= 'cnd-stephanie-yager-92B61D10-F815-4CB1';
export const API_KEY_NAME = 'x-amenity-api-key';
export const API_PROVIDER_LIST_FRAGMENT = '/api/v1/emr-api/non-patient/providers?latitude=29&longitude=-95&maxRadius=1000&pagingRowOffset=0&topNumRows=10';
export const API_PROVIDER_DATA_FRAGMENT = '/api/v1/emr-api/non-patient/provider?providerId=';

export const API_BASE_HEADERS: any = {};
API_BASE_HEADERS[API_KEY_NAME] = API_KEY;
