// =========
// Port
// =========
process.env.PORT = process.env.PORT || 3001;

// ============
// Entorno
// ============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ========================
// Vencimiento del token
// ========================
process.env.CADUCIDAD_TOKEN = process.env.CADUCIDAD_TOKEN || '3h';

// ========================
// SEED de autenticación
// ========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ==============
// Base de datos
// ==============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/repuestos';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;