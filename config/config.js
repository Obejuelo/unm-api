//====================
// =======PORT========
//====================
process.env.PORT = process.env.PORT || 5000;

//====================
// =======seed========
//====================
process.env.SEED = process.env.SEED || 'seed-desarrollo';

//====================
// ==Caducidad token==
//====================
process.env.CAD_TOKEN = '24h';

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/bd_unm';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;