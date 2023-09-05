const express = require('express')
const app = express()
const port = 3001


/*CONEXION A LA BD*/
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '192.168.0.160',
  user: 'root',
  password: '123',
  database: 'pdf',
  port:'3306'
})
connection.connect()
/*FIN CONEXION*/



const sqltest = () => { 
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM catalogo_secciones`, (err, rows, fields) => {
      if (err) {
        reject(new Error('Pagina no encontrada')) 
      } else {
        resolve(rows);
      }
    });
  });
};


app.get('/busqueda_catalogo/', async (req, res) => {
    try{
        const catalogo_secciones = await sqltest().then((res) => {return res});
        res.send(catalogo_secciones)
      }catch(error){
        res.send({"ERROR 404":"Error en la obtencion de pagina"})
    }
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
