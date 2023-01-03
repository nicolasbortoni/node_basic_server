import Router from 'express'
import { usersGet, usersPut, usersPost, usersDelete } from '../controllers/user.js'

const router = Router();

router.get('/', usersGet);

router.put('/:id', usersPut);

router.post('/', usersPost);

router.delete('/', usersDelete);


export{
    router
}