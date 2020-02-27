const axios = require('axios');

//Asyn retorna promesa
const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=857dd7ba287e4d488975c65c414fb949&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}