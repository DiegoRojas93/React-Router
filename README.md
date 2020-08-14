# React router

### Moviendonos y manipulando el historial de navegación

Dentro de los componentes que renderizamos a través de Route encontramos en sus props un objeto llamado **history** , este objeto cuenta con multiples propiedades y métodos como:

- **go:** es un método que te permite ir a cierto momento en el historial de navegación, recibe como parámetro un número, dependiendo de la cantidad es cuanto avanzara en el historial y si es positivo o negativo será la dirección que tome.
- **goBack:** es un método que te permite navegar una pagina hacia atrás, funciona de forma similar a que si llamáramos a go(-1).
- **goForward:** es un método que te permite navegar una pagina hacia adelante, funciona de forma similar que si llamáramos a go(1).
- **push:** te permite añadir una nueva ruta al stack de navegación.

not-found.js
```
import React, { PureComponent } from 'react';
import './generic-page.css'

class NotFound extends PureComponent {
	handleForwardClick = () => {
		// this.props.history.goForward();
		this.props.history.go(1);
	}
	handleBackClick = () => {
		// this.props.history.goBack();
		this.props.history.go(-1);
	}

	handleRandomClick = () => {
		const random = Math.round(Math.random() * (10 - 1) + 1)
		this.props.history.push(`/videos?id=${random}`)
	}

	render(){
		return (
			<div className="Page NotFound">
				<h1>404 Not fount</h1>
				<h3 className="SadFace">:(</h3>
				<h2>No hemos encontrado la pagina que buscabas</h2>
				<button
					className="Button"
					onClick={this.handleForwardClick}
				>
					Ir a la sigiente página 👉
				</button>
				<button
					className="Button"
					onClick={this.handleBackClick}
				>
					Ir a la enterior página 👈
				</button>
				<button
					className="Button"
					onClick={this.handleRandomClick}
				>
					Ir al video random 🍀
				</button>
			</div>
		)
	}
}

export default NotFound
```

Tambien podemos conocer y namipular la **locacion** (hash ó ruta de su website) por medio de del metodo:

`window.location.search`
`window.location.search.split('=')`

videos.js
```
class Home extends Component {

  handleOpenModal = (id) => {
    this.props.actions.openModal(id)

  }

  componentDidMount() {
    const search = this.props.location.search;

    if (search) {
      const id = search.split('=')[1]
      this.handleOpenModal(id)
    }
  }
  render() {
    ...
  }
}
```