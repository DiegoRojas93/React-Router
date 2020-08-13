# React router

### Parámetros de navegación

En esta clase vamos a aprender a personalizar un poco más nuestra url y pasar parámetros a través de esta. Haremos uso del componente Link y su propiedad to dentro de cada componente Media de nuestro proyecto.

media.js
```
import {Link} from 'react-router-dom';

class Media extends PureComponent {
  return (
      <Link to={{
        pathname: '/videos',
        search: `?id=${this.props.id}`,
        state: {
          modal: true,
          id: this.props.id
        }
      }}>
        <div className="Media" onClick={this.handleClick}>
          ...data
        </div>
      </Link>
    )
  }
}

export default Media;
```

modal.js
```
import { Link } from 'react-router-dom'

function Modal(props) {
  return (
    <div className="Modal">
      {props.children}

      <Link
        to={{
          pathname: '/videos/',
          state: {
            modal: false
          }
        }}
      >
        <button
          onClick={props.handleClick}
          className="Modal-close"
        />
      </Link>
    </div>
  )
}

export default Modal;
```