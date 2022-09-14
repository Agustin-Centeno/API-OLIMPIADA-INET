import express from "express";
import {
    registrarUsuarioAdmin,
    confirmarUsuarioAdmin
 } from "../controllers/AdminController.js";

const routerA = express.Router();

//GET
//routerA.get('/', );



//POST
//routerA.post('/', );
routerA.post('/registrarUsuarioAdmin', registrarUsuarioAdmin );
routerA.post('/confirmarUsuarioAdmin', confirmarUsuarioAdmin);

//PATCH
//routerA.patch('/', );

export default routerA;