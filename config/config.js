//====================
// =======PORT========
//====================
process.env.PORT = process.env.PORT || 5000;

//====================
// =====DATABASE======
//====================
process.env.URLDB = 'mongodb://localhost:27017/bd_unm';

//====================
// =======seed========
//====================
process.env.SEED = process.env.SEED || 'seed-desarrollo';

//====================
// ==Caducidad token==
//====================
process.env.CAD_TOKEN = '24h';
