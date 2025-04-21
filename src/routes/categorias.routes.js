import {Router} from "express";
import { methodHTTP as categoriacontroller } from "../controllers/categoria.controllers.js";

/** */
const router = Router(); /**declarado */

/**configuramos respuesta desde server metodo http get ** (/) empon base*/
router.get("/", categoriacontroller.getCategorias); /** para crud - read */
router.post("/", categoriacontroller.postCategorias);/**para crud - create */

/**ruta que recibe un parametro */
router.get("/:id", categoriacontroller.getCategory); /**para crud - read 1 sola fila*/

/**ruta que recibe parametro id de categoria a borrar */
router.delete("/:id", categoriacontroller.deleteCategory); /**para crud - delete 1 sola fila*/

/**ruta que recibe parametro tanto el cuerpo del id a actualizar */
router.put("/:id", categoriacontroller.updateCategorias); /**para crud - update 1 sola fila*/

/**hacemos disponible a router en toda la app */
export default router;