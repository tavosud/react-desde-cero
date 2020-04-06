import React from 'react';
import './styles/styles.scss';
import Curso from './Curso';

const cursos = [
  {
    "title" : "React desde cero",
    "image" : "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desarrollo%20frotend.png",
    "profesor" : "Beto Quiroga",
    "price" : 30
  },
  {
    "title" : "Go desde cero",
    "image" : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-03/Go-desde-cero.png",
    "profesor" : "Gustavo Cuyutupa",
    "price" : 50
  },
  {
    "title" : "Angular desde cero",
    "image" : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular.png",
    "profesor" : "Juan Perez",
    "price" : 60
  },
  {
    "title" : "Vue desde cero",
    "image" : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/Vue-JS.png",
    "profesor" : "Clara Rojas",
    "price" : 65
  }
]

const App = () => (

<>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
   <div className="lg-cols-4 lg-x-2">
     <img className="main-banner__img" src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="banner" />
     <div className="main-banner__data s-center">
       <p className="t2 s-mb-0">Cursos de EDteam</p>
       <p>Tu futuro te esta esperando</p>
       <a href="https://www.google.com.pe" className="button">Suscribete</a>
     </div>
   </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
  {
    cursos.map( c => <Curso title={c.title} image={c.image} profesor={c.profesor} price={c.price} /> )
  }
</div>
</>

)

export default App;

//Reglas JSX:
//1: Toda etiqueta debe cerrarse
//2: Los componentes deben devolver un solo elemento padre
//3: Apoyarse de los Fragment cuando necesite devolver 2 elementos
//4: Fragment => <> hijos </>
//5: La etiqueta img se debe cerrar y debe incluir el atributo alt
//6: class => className
//7: for => htmlFor
//8: NO if, else, while
