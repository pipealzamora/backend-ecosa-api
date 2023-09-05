const mysql_con = require("../pool/pool");


exports.busquedacatalogo = async (req, res) => {


        const connection = mysql_con.pool

        var  parametro = req.params.parametro
        if (parametro === "nombre"){
            parametro = "descripcion"
        }
        const argumento = req.params.argumento

        return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM catalogo WHERE ${parametro} LIKE  '%${argumento}%' ;`, (err, rows, fields) => {
          if (err) {
            reject(new Error('Pagina no encontrada')) 
          } else {
            resolve(rows);
            res.send(rows)
          }
        });
      }); 

};