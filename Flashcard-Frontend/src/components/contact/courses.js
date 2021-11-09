// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import {NavLink} from 'react-router-dom';
import { Row } from 'react-materialize';

import Course from './course'

const Cursos = (props) => (
  <Row>
  	<div class="bar">
  		<h5>Cursos</h5>
  		<NavLink to="/forms"><a class="waves-light btn">Adicionar</a></NavLink>
  	</div>
  	{props.cursosInfo.map(cursoInfo =>(
  		<Course
  			title={cursoInfo.nome}
  			descript={cursoInfo.descricao} />
  	))}
  </Row>
);

export default Cursos;