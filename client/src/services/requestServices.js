const axios = require("axios");

/**
 * THIS METHOD IS USED FOR FETCHING THE DATA VIA GET REQUEST
 * @param {*String} url THE URL
 * @returns JSON DATA
 */
export const getFetch = async (url) => {
  // REFACTOR -- USE ENV FOR LOCALHOST
  const res = await axios.get(url);
  const json = await res.data;

  if (json) return json;
  return [{}];
};

/**
 * THIS FUNCTION USES THE HTTP POT REQUEST TO PUSH A NEW BLOG
 * @param {*String} url THE URL ADRESS
 * @param {*} data THE JSON DATA
 * @returns
 */
export const postFetch = async (url, data) => {
  const res = await axios.post(url, data);
  const json = await res.data;

  if (json) return json;
  return [
    {
      err: "Could not be saved",
    },
  ];
};
