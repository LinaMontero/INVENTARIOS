import {Router} from "express";
import { methodHTTP as productoscontroller } from "../controllers/productos.controllers.js";

/** */
const router = Router(); /**declarado */

/**configuramos respuesta desde server metodo http get ** (/) empon base*/
router.get("/", productoscontroller.getProductos)

/**hacemos disponible a router en toda la app */
export default router;