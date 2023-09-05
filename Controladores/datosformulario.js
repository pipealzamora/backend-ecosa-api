const mysql_con = require("../pool/pool");

exports.datos = async (req, res) => {
    
    try{
    
           

        /*Conexion MYSQL*/
        const conection = mysql_con.pool_formulario

        /*Data formulario*/
        const data = req.body;
        const Nombres = data.Nombres
        const Apellidos = data.Apellidos
        const Correo_electronico = data.Correo
        const Asunto = data.Asunto
        const Mensaje = data.Mensaje
            

        //INSERT 
        const insert = await conection.query(`INSERT INTO datos (Nombre, Apellidos, Correo_electronico, Asunto, Mensaje) 
                                                                            VALUES ('${Nombres}', '${Apellidos}', '${Correo_electronico}', '${Asunto}', '${Mensaje}')`
                                                                            );
        console.log(`conexion existosa ${insert}`)
         res.status(200).json({"status": 200, "data": req.body});


    
            
        //*validacion de datos *//
        if (!data.Nombre || data.Apellidos || data.Correo || data.Asunto || data.Mensaje) {
    
        }

    } catch (err){
        console.log(err)
        res.status(404).send({"status": 400, "data": req.body});
    }

}

 /*Cierre de la funcion datos*/