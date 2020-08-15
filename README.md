# React router

### Creando una página única por video

Nuestro server render esta listo, ahora vamos a crear una ruta dedicada para cada video. Para manejar una ruta dinámica en el componente Route, solamente debemos poner dos puntos ( : ) y el nombre de la variable.

Una última cosa antes de terminar con nuestro proyecto, el método render que se maneja en el archivo del cliente es recomendable usarlo solo cuando se tiene render en el lado del cliente, en caso de tener server render como es nuestro caso es mejor usar el método hydrate ya que render siempre esta haciendo un re-render de la aplicación mientras que hydrate va a enlazar los eventos y unirse a lo que ya renderizo el servidor.