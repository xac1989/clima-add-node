const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//const lugar = require('./lugar/lugar');
//const clima = require('./clima/clima');
const info = require('./info/info');
info.getInfo(argv.direccion).then(console.log).catch(console.log);
//lugar.getLugarLatLng(argv.direccion).then(console.log);

//clima.getClima(-33.459999, -70.639999).then(console.log).catch(console.log);