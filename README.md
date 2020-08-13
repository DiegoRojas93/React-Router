# React router

### Páginas de contenido no encontrado 404

Otra cosa común y necesaria para tu aplicación es poder responderle al usuario cuando no encuentre algún tipo de contenido, responder a ese error 404.

Podemos hacer esto de manera fácil gracias a que, si al componente Route no le indicamos una ruta, esto lo tomara como la ruta por defecto a renderizar y en caso de no hacer match con ninguna ruta marcada entonces va a renderizar el componente.


app.js
```
render(
  <BrowserRouter
  >
  <Provider store={store}>
    <Fragment>
      <Header />
      <Route exact path="/" component= {Videos}/>
      <Route exact path="/videos" component={Home}/>
      <Route exact path="/contacto" component={Contact}/>
      <Route exact path="/perfil" component={perfil}/>
      <Route component={NotFound}/>
    </Fragment>
  </Provider>
  </BrowserRouter>
, homeContainer);
```