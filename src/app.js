/**Importamos al framework express  */
import express from "express";
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"
import productosRoutes from "./routes/productos.routes.js"

/**asignamos a app toda funcionalidad para mi server web */
const app = express();

/**setear un puerto a mi web server */
app.set("port",5000)

/**Middleware  /*** elemento entre la req y res */ 
app.use(express.json());

app.use(cors());
/**routes */
app.use("/api/categorias", categoriaRoutes)
app.use("/api/productos", productosRoutes)

/**hacemos disponible a mi server app para toda la aplicacion */
export default app;