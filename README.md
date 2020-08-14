# React router

### Prompt, validación antes de dejar la página

Vamos a implementar una validación antes de dejar la página en la que se encuentra el usuario. Esto sucede comúnmente en páginas que incluyan un formulario para evitar que el usuario se vaya sin enviar el formulario o dejarlo a medias.

Dentro de nuestro proyecto esto tiene sentido cuando estamos realizando alguna búsqueda. Para implementarlo usaremos el componente Prompt cuyos parámetros que recibe son when que recibe un booleano para indicar si muestra el mensaje del navegador y message que recibe un string que será el mensaje que reciba el usuario.

search.js
```
import React from 'react';
import './search.css';
import  { Prompt } from 'react-router';

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <Prompt
      when={props.prompt}
      message= "¿Estas seguro de dejar lo que escribiste?"
    />
    <input
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search
```

search.container.js
```
import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import  * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';

class SearchContainer extends Component {
  state = {
    value: '',
    prompt: false
  }
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.input.value, 'submit')
    // fetch(`http://miapi.com/buscar/${this.input.value}`).then((data)=>{
    // })
    this.props.actions.searchAsyncEntities(this.input.value)
  }
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-'),
      prompt: !!(event.target.value.length)
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
        prompt={this.state.prompt}
      />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);

```