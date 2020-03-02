//Constantes de forma global, mediante proccess


///Puerto para heroku o 3000
process.env.PORT = process.env.PORT || 3000;


// ENTORNO //
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// BASE de Datos //

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    //URl local
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    //URl atlasMongo
    //guardada en heroku como var env, para no mostrar en github
    urlDB = process.env.MONGO_URL
}

process.env.URLDB = urlDB;