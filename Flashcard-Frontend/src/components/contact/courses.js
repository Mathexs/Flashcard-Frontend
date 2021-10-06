// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'

import img from '../../images/img.png';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';

const Cursos = () => (
  <Row>
    <Col m={8} s={12}>
        <h5>Cursos</h5>
        <Experience title="Biologia"
                    description=""
                    avatar={img}
        />
        <Experience title="História"
                    description=""
                    avatar={img2}
        />
        <Experience title="Física"
                    description=""
                    avatar={img3}
        />
        <Experience title="Português"
                    description=""
                    avatar={img4}
        />
        <Experience title="Química"
                    description=""
                    avatar={img5}
        />
    </Col>
  </Row>
);

export default Cursos;