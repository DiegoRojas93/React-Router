# React router

### ReactDOMServer

En esta clase vamos a terminar el renderizado en el server y además vamos a implementar babel-node para poder, entre varias cosas, manejar los imports de ES6.

Para instalar babel-node debemos correr los siguientes comandos:

`npm install babel-cli babel-watch –D -E`

Al momento de renderizar nuestros componentes en React hemos estado utilizando el método render de reactDOM, pero este método solo funciona en el navegador. Para poder renderizar en el servidor haremos uso de reactDOMServer, cuenta con cuatro métodos de los cuales dos se utilizan dentro de un stream, los otros dos métodos son:

- **renderToString:** te sirve para hacer server render y re-renderizar en el navegador.

- **renderToStaticMarkup:** este método te sirve si quieres hacer un server render que NO utilice un renderizado en el navegador.

ara nuestro proyecto usaremos ***renderToString***.

StaticRouter cuenta con un parámetro necesario llamado location, este parámetro le va a indicar que ubicación se va a renderizar. En nuestro servidor le pasaremos a StaticRouter el parámetro location a través de la url que venga en el request.

Babel por defecto no va a entender React, entonces al momento correr babel-node debemos de indicarle que presets utilizar, tal como en el siguiente comando que añadiremos al package.json:

`babel-node src/server.js –presets react,es2015,stage-2``

Para evitar problemas con nuestros archivos estáticos de CSS e imágenes debemos configurar nuestro servidor de express añadiendo las siguientes líneas de código:

```
app.use(express.static(‘dist’));
app.use(‘/images’, express.static(‘images’));
```