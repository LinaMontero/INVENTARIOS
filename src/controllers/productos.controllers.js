import getConnection from "../db/database.js"

const getProductos = async (req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado FROM productos")
        res.json(result);
    } catch (error) {
        console.error("ERROR 500");
    }
}


export const methodHTTP = {
    getProductos
}