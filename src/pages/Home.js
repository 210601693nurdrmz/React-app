import React from 'react';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Link to="/SecondPage">
            <Button variant="primary">Çalýþtýr</Button> 
            </Link>
        </div>
    );
};

export default Home;
