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
    urlDB = 'mongodb+srv://admin:3pfr89zGmy7sjX5B@cluster0-lto3y.mongodb.net/cafe'
}

process.env.URLDB = urlDB;