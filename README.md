# React router

### Redirect - Switch

Habrás notado que nuestro componente NotFound se está renderizando a la vez que el componente Home. Esto sucede porque la Route de NotFound está haciendo match con la de Home, para resolverlo debemos implementar Switch como componente padre de nuestros componentes Route.

**Switch** se encarga de solo renderizar el primer componente que haga match con la ruta que estés designando.

```
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const homeContainer = document.getElementById('home-container')

render(
  <BrowserRouter
  >
  <Provider store={store}>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component= {Videos}/>
        <Route exact path="/videos" component={Home}/>
        <Route exact path="/contacto" component={Contact}/>
        <Route exact path="/perfil" component={perfil}/>
        <Route component={NotFound}/>
      </Switch>
    </Fragment>
  </Provider>
  </BrowserRouter>
, homeContainer);
```

El componente **Redirect** nos ayudara para realizar un redireccionamiento en el navegador, sus principales parámetros son ***from*** y ***to*** que sirven para indicar de que ruta van a redirigir hacía que ruta van a realizar el redireccionamiento.

**Nota:** no olvidemos que la ruta de NotFound sea la ultima ruta dentro del Switch, debido a que si se pine por encima de los Redirects, estos mismos no van a hacer el redireccionamiento.
```
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const homeContainer = document.getElementById('home-container')

render(
  <BrowserRouter
  >
  <Provider store={store}>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component= {Videos}/>
        <Route exact path="/videos" component={Home}/>
        <Route exact path="/contacto" component={Contact}/>
        <Route exact path="/perfil" component={perfil}/>
        <Redirect from="/v" to="/videos"/>
        <Route component={NotFound}/>
      </Switch>
    </Fragment>
  </Provider>
  </BrowserRouter>
, homeContainer);
```

Para no entrar en problemas del Server Side Render añadiremos un nuevo NavLink dentro de nuestro Header para poder realizar el redireccionamiento.

```
import React, { Component } from 'react';
import './header.css';

import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={logo} width={250}/>
        <nav>
          <ul>

            ...

            <li>
              <NavLink to='/v'>
                Redirect
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
```
