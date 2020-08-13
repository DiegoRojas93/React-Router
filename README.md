# React router

### Route

Aun no estas cambiando nada dentro de la interfaz, solamente se esta cambiando la url. Para poder cambiar la interfaz acorde a la url usaremos Rote, algunas Propiedades son:

- **Component:** que compoente quieres renderizar

```
import { BrowserRouter, Route } from 'react-router-dom'

function app () {

  return (
    < BrowserRouter >
      <Route component={Home} />
      <Route component={Video} />
    < /BrowserRouter >
  )
}

export default App

```

- **path:** indica la ruta en la cual va a renderizar el componenteque le pases

```
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './src/container/Home'
import Video from './src/container/Video'

function app () {

  return (
    < BrowserRouter >
      <Route path="/pagina" component={Home} />
      <Route path="/pagina/video" component={Video} />
    < /BrowserRouter >
  )
}

export default App

```

- **render:** es una alternativa a componente, puedes hacer un renderizado en forma de función como en los componentes de React.

```
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './src/container/Home'
import Video from './src/container/Video'

function app () {

  return (
    < BrowserRouter >
      <Route path="/pagina" render = () => ({<div> ... </div>}) />
      <Route exact path="/videos" render={()=>(<h1>videos</h1>)}/>
    < /BrowserRouter >
  )
}

export default App

```

- **children:** son los hijos o componentes que tenga anidado.

```
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './src/container/Home'
import Video from './src/container/Video'

function app () {

  return (
    < BrowserRouter >
      <Route path="/pagina" component={Home} />
      <Route exact path="/videos" ><h1>videos</h1></Route>
    < /BrowserRouter >
  )
}

export default App

```

- **exact:** recibe un booleano, si le indicas que es verdadero solo hára match si la ruta coincide exactamente con la ubicación, no harácasa a ninguna sub-ruta.

```
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './src/container/Home'
import Video from './src/container/Video'

function app () {

  return (
    < BrowserRouter >
      <Route exact path="/pagina" component={Home} />
      <Route exact path="/pagina/video" component={Video} />
    < /BrowserRouter >
  )
}

export default App

```

| path | location.pathname | exact | matches? |
| ------------ | ------------ | ------------ | ------------ |
| /one | /one/two | true | no |
| /one | /one/two | false | yes |

- **strict:** recibe un booleano, si le indicas que es verdadero solo hará match si la ruta a la que te diriges es identica a la ruta del Route

```
import { BrowserRouter, Route } from 'react-router-dom'

import Home1 from './src/container/Home'
import Home2 from './src/container/Home2'

function app () {

  return (
    < BrowserRouter >
      <Route strict path="/pagina" component={Home1} />
      <Route exact strict path="/pagina/" component={Home2} />
    < /BrowserRouter >
  )
}

export default App

```

***strict***

| path | location.pathname | matches? |
| ------------ | ------------ | ------------ |
| /one/ | /one | no |
| /one/ | /one/ | yes |
| /one/ | /one/two | yes |

***exact strict***

| path | location.pathname | matches? |
| ------------ | ------------ | ------------ |
| /one/ | /one | yes |
| /one/ | /one/ | no |
| /one/ | /one/two | no |

- **sensitive:** recibe un booleano, si le indicas que es verdadero el ***case sensitive*** podra identificar si la ruta tiene tiene la letra minuscula o mayuscula tal como si la indicase en su path.

si no agregas sensitive, podras identificar la ruta sin importar si esta en minusculas o mayusculas.


```
import { BrowserRouter, Route } from 'react-router-dom'

import Home1 from './src/container/Home'

function app () {

  return (
    < BrowserRouter >
      <Route sensitive path="/Pagina" component={Home1} />
    < /BrowserRouter >
  )
}

export default App

```

| path | location.pathname | sensitive | matches? |
| ------------ | ------------ | ------------ | ------------ |
| /one | /one | true | yes |
| /One | /one | true | no |
| /One | /one | false | yes |


Vamos a cambiar el nombre del componente Home por Videos y añadiremos un nuevo componente Home que encontraras en el sistema de archivos, por utimo configuraremos sus componentes Route.