const cors = require('cors');
const pdf = require('pdf-parse');
const axios = require('axios');
const fs = require ('fs');
const { datos } = require('./datosformulario');




/* arrreglo del array paginado */
exports.paginado = async (req, res) => {
  const rutaarchivo = "../ecosaweb-backend/paginas";
  try {
    const paginado = await new Promise((resolve, reject) => {
      fs.readdir(rutaarchivo, function(error, data) {
        if (error) {
          console.error(error)
          reject("Error al mostrar este directorio");
        } else {
          resolve(data);
        }
      });
    });

    /*patron irregular*/
    const numeros =/\d+/

    /*map de los funcion paginado */
    const datos = paginado.map(function(value) {
      let rutapaginas = "http://192.168.0.160:3000/paginas/"
      
      /* validacion del patron irregular*/
      const paginas = value.match(numeros)
      return {
        /*se le manda al usuario*/
        pagina: paginas[0],

        /*es el valor*/
        ruta:rutapaginas + value,               
      };
      
    });
    
    const jsonDatos = JSON.stringify(datos);
    
    /* se mandan los datos*/
    res.send({
      "status": 200,
      "data" : jsonDatos
    });

    /*se manda un error*/
  } catch (error) {
    res.status(500).send({
      "status": 500,
      "error": error
    });
  }
}
