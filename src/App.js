import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './styles/styles.scss';
import Curso from './Curso';

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
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
  <Curso />
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
