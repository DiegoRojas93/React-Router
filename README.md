# React router

### StaticRouter

Los métodos utilizados de HTML5 para el BrowserRouter no existen en Node, por eso se debe utilizar StaticRouter.

Dentro de nuestro proyecto en el archivo app.js encontraremos varios componentes que solo funcionan del lado del navegador, necesitamos separar las cosas en un archivo de compilación para el cliente y uno para el servidor.

Vamos a realizar el refactor del archivo app.js para tener dos archivos y configurar Webpack para separar la compilación de archivos.

Una vez separados y compilados los archivos, dentro de nuestro servidor vamos a importar StaticRouter y el archivo compilado que no tiene nada relacionado al navegador para envolverlo dentro de StaticRouter.