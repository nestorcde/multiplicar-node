const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];
//console.log(argv);
switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        //console.log(argv.base);
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('Archivo creado:', `${archivo}`.green)).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv.base);
//console.log(argv);
//let base = 'k';