const fs = require("fs");
const colors = require ('colors');


const crearArchivo = async( base, list, desde , hasta ) => {  
   try{

    let salida = ''; 

    for (let i = desde; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    
    if( list ){
      console.log("===========================================".green);
      console.log(" Tabla del: ".green, colors.blue( base ) );
      console.log("===========================================".green);
      console.log(salida);
    }
        
   

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return  `tabla-${base}.txt`;
   } catch(err){
      throw err;
   } 
    
    
};

module.exports = {
  crearArchivo
}