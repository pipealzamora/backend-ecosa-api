const mysql_con = require("../pool/pool");

 exports.sqlsecciones = async (req, res) => {

  const connection = mysql_con.pool

      return new Promise((resolve, reject) => {
          connection.query(`SELECT * FROM catalogo_secciones`, (err, rows, fields) => {
            if (err) {
              reject(new Error('Pagina no encontrada')) 
            } else {
              resolve(rows);
              res.send(rows)
            }
          });
    });

 };








