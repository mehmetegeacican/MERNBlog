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

/**
 * THIS FUNCTION HANDLES THE DELETE REQUESTS
 * @param {*string} url THE URL ADDRESS
 * @param {*string} id THE PARAMETER ID
 * @returns THE DELETED JSON
 */
export const deleteFetch = async (url, id) => {
  let url_string = url + "/" + id;
  const res = await axios.delete(url_string);
  const json = await res.data;

  if (json) return json;
  return [{ err: "Could not be deleted" }];
};
/**
 * THIS FUNCTION HANDLES THE PUT REQUESTS
 * @param {*string} url THE URL ADDRESS
 * @param {*string} id THE PARAMETER ID
 * @param {*JSON} jsonData THE JSON DATA WITH THE EDITED VALUES
 * @returns THE OLD VERSION OF THE CHANGED VALUE
 */
export const putFetch = async (url, id, jsonData) => {
  let url_string = url + "/" + id;
  try {
    //console.log("url",url_string);
    const res = await axios.put(url_string, jsonData);
    const json = await res.data;
    if (json) return json;
    return [];
  } catch (err) {
    throw err;
  }
};
