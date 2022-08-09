const axios = require('axios');

/**
 * THIS METHOD IS USED FOR FETCHING THE DATA VIA GET REQUEST
 * @param {*String} url THE URL 
 * @returns JSON DATA
 */
export const getFetch = async (url) => {
    // REFACTOR -- USE ENV FOR LOCALHOST
    const res = await axios.get(url);
    const json = await res.data;
    
    if(json) return json;
    return [];
}; 
