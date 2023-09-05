const express = require('express');
const router = express.Router();
const busquedacatalogo = require ("../Controladores/busquedacatalogo")
const busquedasecciones = require ("../Controladores/busquedasecciones")
const datosformulario = require ("../Controladores/datosformulario")
const paginado = require ("../Controladores/paginado")

router.get("/busqueda_catalogo/:parametro/:argumento", busquedacatalogo.busquedacatalogo)
router.get("/catalogo_secciones" , busquedasecciones.sqlsecciones)
router.post("/datosformulario", datosformulario.datos)
router.get("/paginado", paginado.paginado)

module.exports = router;


