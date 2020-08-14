# React router

### Obteniendo el historial desde cualquier componente

El history es una propiedad que le llega a componentes que son renderizados por el componente padre Route, pero ¿qué pasa con los componentes que no son paginas o qué simplemente no forman parte de ninguna ruta?.

Dentro de nuestro curso tenemos un caso de ese estilo, el Header no forma parte de ninguna ruta ó pagina por lo tanto no recibe las propiedades de history, location y match.

Existe un High Order Component llamado withRouter que te permite añadir estas propiedades y asi solucionar el enrutamiento a componentes que no hacen parte de las rutas.

```
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'

import './header.css';

import logo from '../../../images/logo.png';

class Header extends Component {
  handleClick = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <header className="Header">
        <img src={logo} width={250}/>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="is-selected">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/videos" activeClassName="is-selected">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contacto" activeClassName="is-selected">
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/perfil" activeClassName="is-selected">
                Perfil
              </NavLink>
            </li>
            <li>
              <NavLink to='NotFound' activeClassName="is-selected">
                Not found 2
              </NavLink>
            </li>
            <li>
              <NavLink to='/v'>
                Redirect
              </NavLink>
            </li>
            <li>
              <a onClick={this.handleClick}>
                👈
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)
```