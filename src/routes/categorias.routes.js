import {Router} from "express";
import { methodHTTP as categoriacontroller } from "../controllers/categoria.controllers.js";

/** */
const router = Router(); /**declarado */

/**configuramos respuesta desde server metodo http get ** (/) empon base*/
router.get("/", categoriacontroller.getCategorias)

/**hacemos disponible a router en toda la app */
export default router;