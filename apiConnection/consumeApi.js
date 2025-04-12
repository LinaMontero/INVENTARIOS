const urlCategorias = "http://localhost:5000/api/categorias"
const urlProductos = "http://localhost:5000/api/productos"

export const obtainCategories = async ()=>{
    try{
        const resultado = await fetch(urlCategorias); //then
        const categorias = await resultado.json(); //then
        return categorias
    }catch (error) {
        console.error("error")
    }
}

export const obtainProductos = async ()=>{
    try{
        const resultado = await fetch(urlProductos); //then
        const productos = await resultado.json(); //then
        return productos
    }catch (error) {
        console.error("error")
    }
}