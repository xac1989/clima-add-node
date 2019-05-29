const axios = require('axios');
const apiid = '30f585ef71b5cf182ac1afcfdcfa3c48';
const units = 'metric';
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ apiid }&units=${ units }`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}