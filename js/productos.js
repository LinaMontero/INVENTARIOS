
import { obtainProductos } from "./../apiConnection/consumeApi.js"

document.addEventListener("DOMContentLoaded", ()=>{
    getProductos();
})


async function getProductos(){
        const productosObtained = await obtainProductos();
    const container = document.querySelector('tbody')
    productosObtained.forEach((product)=>{
        const {ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado} = product
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            ${ProductoID}
        </td>
        <td>
            ${ProductoNombre}
        </td>
        <td>
            ${ProveedorID}
        </td>
        <td>
            ${CantidadPorUnidad}
        </td>
        <td>
            ${PrecioUnitario}
        </td>
        <td>
            ${UnidadesStock}
        </td>
        <td>
            ${UnidadesPedidas}
        </td>
        <td>
            ${NivelReorden}
        </td>
        <td>
            ${Discontinuado}
        </td>
        <td>
            <button class="btn color3">Details</button>
        </td>
        <td>
            <button class="btn color2">Edit</button>
        </td>
        <td>
            <button class="btn color5">Delete</button>
        </td>
        `;
        container.appendChild(row)
        
        
    })
}