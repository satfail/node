const axios = require('axios');

const getLugarLatLon = async(direccion) => {

    const encoderUrl = encodeURI(direccion)
    console.log(encoderUrl);



    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderUrl}`,
        headers: { 'x-rapidapi-key': '90c96bbd1emsh74448903b3d3938p18ff52jsn56c02620f812' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    instance.get()
        .then(resp => {
            console.log(resp.data.Results[0]); //Mayuscula por que en el json viene en mayuscula
        })
        .catch(err => {
            console.log('Error !!', err);
        })

    return {
        dir,
        latitud,
        longitud

    }

}

module.exports = {
    getLugarLatLon
}