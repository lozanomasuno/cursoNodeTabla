const { crearArchivo }  = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require ('colors');

console.clear();

crearArchivo( argv.b, argv.l,  argv.d, argv.h,  )
    .then( nombrearchivo => console.log(nombrearchivo.rainbow,  'Creado'))
    .catch( err => console.log(err) );