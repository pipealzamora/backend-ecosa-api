require ('dotenv').config();
const { json } = require('express')
const express = require('express')
var cors = require('cors')
const bodyparser = require('body-parser');



const app = express()
app.use(cors())


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


//ECOSA WEB API
app.use('/api', require('./Rutas/api'));


//MANEJO DE ERRORES
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});



app.listen(3001, () => {
})