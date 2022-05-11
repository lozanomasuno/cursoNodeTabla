const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Describe la base de la tabla de multiplicar'
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    demandOption: false,
    describe: 'Lista los elementos de la tabla'
  })
  .option("d", {
    alias: "desde",
    type: "number",
    default: 0,
    describe: 'Nro Inicial'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: 'Nro Final'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    if (argv.l === false) {
      throw "El valor lista debe ser proporcionado";
    }
    return true;
  })
  .argv;

  module.exports = argv;