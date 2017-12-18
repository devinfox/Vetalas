import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import {Image} from 'react-image';
import {Row, Col, Card} from 'react-materialize';
import {Button} from 'react-materialize';
var Center = require('react-center')


const Home = () => {
    return (
                <Row>
                <Col m={4}></Col>
                <Col m={4}>
                <br/><br/>
                <div>
                <Center>
                <Link to="/catalogue" className="image-class">
                    <img src="https://i.imgur.com/1YqtKu9.jpg"/>
                    </Link>
                </Center>
                </div>
                </Col>
                <Col m={4}></Col>
                </Row>
    );
}

export default Home;
