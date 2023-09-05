var mysql = require('mysql');


var pool = mysql.createPool({
  connectionLimit:4,
  host: "192.168.0.160",
  user: "root",
  password: "123",
  database:"pdf"
});

var pool_formulario = mysql.createPool({
  connectionLimit:4,
  host: "192.168.0.160",
  user: "root",
  password: "123",
  database:"formulario"
});

pool.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Conectado a MYSQL');
  connection.release();
});


pool_formulario.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Conectado a MYSQL');
  connection.release();
});

module.exports = {pool, pool_formulario};