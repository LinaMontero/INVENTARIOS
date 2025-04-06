/**function expression */
import app from "./app.js";/**importamos app.js */
const main = () =>{  /**declaro */
    app.listen(app.get("port"));  /**nos traemos al puerto 5000 para escuchar */
    console.log(`The company's web server is running on port ${app.get("port")}`);  /**ejecutamos el servidor en el puerto */
}

main(); /**llamo */