import { response, request } from "express";

const usersGet = ( req = request, res = response ) => {
    //Recepcion de query params - opcionales
    const { query } = req;

    res.status(200).json({
        msg:'GET API',
        params: query
    });
}

const usersPut = ( req, res = response ) => {
    //Recepción de parámteros de segmento - obligatorios 
    const { id } = req.params;

    res.status(200).json({
        msg:'PUT API',
        id: id
    });
}

const usersPost = ( req, res = response ) => {
    //Recepción del body del request
    const body = req.body;

    res.status(200).json({
        msg:'POST API',
        body: body
    });
}

const usersDelete = ( req, res = response ) => {
    res.status(200).json({
        msg:'DELETE API'
    });
}

export{
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}