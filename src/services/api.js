import axios from "axios";

const getDataApiCountries = async () => {
  const url = `https://api.covid19api.com/countries`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

const getReportByCountry = async (country) => {
  const url = `https://api.covid19api.com/dayone/country/${country}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

export const api = {
  getDataApiCountries,
  getReportByCountry,
};
