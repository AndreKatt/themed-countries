const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all';

export const SEARCH_BY_COUNTRY = (name) => BASE_URL + 'name/' + name;

export const filterByCodes = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');