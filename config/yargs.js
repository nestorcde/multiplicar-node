const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola ', opciones)
    .command('crear', 'Genera Tabla de Multiplicar ', opciones)
    .help()
    .argv;


module.exports = {
    argv
}