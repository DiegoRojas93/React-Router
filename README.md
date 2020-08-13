# React router

### Link y NavLink

BrowserRouter no hára mucho si no esta acompañado de enlaces yrutas, empecemos hablando de los enlaces que se llaman Link y NavLink. Estos funcionan de manera similar a las anclas `<a></a>` de HTML.

**Link** cuenta con las siguientes propiedades:

- **to:** similar al ***href*** de `<a>`, puede recibir un string indicando la ruta a donde va a mandar o bien recibir un objeto con: pathname, un string que representa la ruta a donde se dirige; search, un string que representa el query de una url; hash, un hash para poner en la url; y por último state, un objeto que representa un estado en la navegación.

- **replace**: es muy similar a to, pero se diferencia en que utiliza el ***history API,*** su trabajo es remplazar la ruta que que linkeara por la ruta que estuvo anteriormente, es decir que al oprimir un link ente volvera a la ruta que estuvo anteriormente.

- **InneRef**: Es una forma de obtener el elemento HTML del componente, funciona igual que el ref de React.

**NavLink** es una nueva version especial de Link, cuenta con varias caracteristicas más poderosas como, por ejemplo:

- **activeClassName:** cuando se navegue a la ruta que dirija el NavLink, esta propiedad añadira al className del componente sl string que le pasemos.

- **activeStyle:** similar a activeClass, pero con estilos en línea

- **isActive:** es una función que se mandara cuando naveguemos a la ruta del NavLink

- **exact:** recibe un booleano, sirve para marcar si dirige a una ruta exacta. Se vera a mayor profundidad cuando manejemos rutas

- **stric:** recibe un booleano, sirve para marcar si dirige a una ruta estricta. Se vera a mayor profundidad cuiando manejemos rutas

- **location:** sirve para poder hacer la comparación de isActive con alguna otra ruta

Vamos a implementar estos componentes dentro del componente Header, dicho componente lo encontraras en el sistema de archivos. Importamos y añadimos Header junto al componente de Home que se encuentra dentro del archivo app.js.

Recuerda importar ***Fragment,*** este es un componente que devuelve múltiples elementos. Fragment te permite agrupar multiples children sin agregar nodos adicionales al DOM.