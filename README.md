# React router

### Tipos de enrutadores

React Router es una libreria más que le añadimos a nuestro stack, lo más básico que debemos aprender de React Router son sus distintos enrutadores:

1. **BrowserRouter:** Es el enrutados que más tiempo utilices como frontend, usa el ***HTML5*** y el ***history API.*** lo que quiere decir que este tipo de enrutador nos da la posibilidad de cambiar las rutas en el navegador.

2. **HashRouter:** Funciona similar al BrowserRouter, pero usa un hash ( **#** ) al inicio de cada url

3. **MemoryRouter:** Mantiene el historial de búsqueda en memoria y te ***sirve para realizar pruebas sin el navegador.*** Por ejemplo usar Jest para hacer pruebas unitarias o pruebas dentro del servidor de forma automatizada sin necesidad de un navegador.

4. **StaticRouter:** Nunca cambia de dirección, es perfecto para realiar ***SSR*** (Server Side Render), por ejemplo renderizar solamente una ruta del tu sitio web.

5. **NativeRouter:** Es el router que no servirá si queremos usar React Native, **No** lo veremos en el curso. Es recomendable usar en su lugar [React Navigation.](https://reactnavigation.org/ "React Navigation.")