# React router

### BwoserRouter

El primer componente que debenmos ver a fondo y manipular será el BrowserRouter, este enrutador cuenta con diferentes propiedades para ser configurado:

- ***basename:*** configura la url base de todas las rutas.

```
<BrowserRouter basename="/calendar">
    <Link to="/today"/> // renders <a href="/calendar/today">
    <Link to="/tomorrow"/> // renders <a href="/calendar/tomorrow">
    ...
</BrowserRouter>
```
- ***getUserConfirmation:*** recibe una función con la cual puedes validar si el ususario quiere dejar la pagina en la que se encuentra.

- ***forceRefresh:*** es un booleano, como su nombre lo indica en caso de ser verdadero se forzará a que el navegador recargue cuando se navegue, es decir, define si la página se deba recargar o no.

- ***keyLenght:*** un key es el id único que recibe cada movimiento en la navegación, keyLenght se encarga de configurar la longitud de cada key y por defecto tiene una ongitud de 6 caracteres.

- ***children:*** es lo que estara dentro de nuestro BrowserRouter.

Todo esto lo encontraras en su [documentación oficial de React Router.](https://reactrouter.com/web/api/BrowserRouter "documentacion oficial de React Router.")

Dentro de nuestro proyecto debemos envolver nuestros componentes principales dentro del BrowserRouter.

app.js
```
import { BrowserRouter } from 'react-router-dom'

render(
  <BrowserRouter
    basename="/videos"
  >
  <Provider store={store}>
    <Home />
  </Provider>
  </BrowserRouter>
, homeContainer);
```