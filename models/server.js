import express from 'express'
import cors from 'cors'
import { router } from '../routes/user.js';


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        //Middlewares
        this.middlewares();

        //Rutas del server
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );
        //Directorio público
        this.app.use( express.static( 'public' ) );
        //Lectura y parseo del body
        this.app.use( express.json() );
    }

    routes(){
        this.app.use( this.usuariosPath, router);
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en el puerto ${ this.port } `)
        });
    }

}

export{
    Server
}