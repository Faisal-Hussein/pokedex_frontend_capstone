import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import Loader from '../components/Loader';

const PokemonInfoPage = () => {
    const { id } = useParams(); // Using useParams hook to get route parameters

    const [pokemonInfo, setPokemonInfo] = useState();
    const [loading, setLoading] = useState(true);
    
    
    const getPokemon = async (id) =>{
        const info = await getPokemonInfo(id);
        setPokemonInfo(info.data);
        console.log(info.data);
        setLoading(false);
    };

    const getPokemonInfo = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    };

    useEffect(() => {
        getPokemon(id);
    }, [id]); // Include id in the dependency array

    return (
        <Container className='pokemon-info'>
            {loading ? (
                <Loader/>
            ) : (
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='my-5 p-5 rounded text-center shadow p-3 mb-5 bg-white'>
                            <Link to={`/pokemon/${pokemonInfo.id}`}>
                                <Card.Img style={{ width: '15rem', height: '15rem' }} src={pokemonInfo.sprites.front_default} variant='top'/>
                            </Link>
                            <Card.Body className={`${pokemonInfo.types[0].type.name} rounded text-white`}>
                                <Link to={`/pokemon/${pokemonInfo.id}`} className='link-name'>
                                    <Card.Title as='div'>
                                        <strong>#{pokemonInfo.id} {pokemonInfo.name.charAt(0).toUpperCase() + pokemonInfo.name.slice(1)}</strong>
                                    </Card.Title>
                                </Link>
                            </Card.Body>
                        </Card>   
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className='p-3 rounded text-center shadow p-3 mb-5 bg-white' style={{ border: 'none' }}>
                            <Card.Body> 
                                <Card.Text>
                                    <Row>
                                        {pokemonInfo.types.map(t => (
                                            <Col key={t.type.name}>
                                                <div className={`${t.type.name} rounded px-4 py-1`} style={{ color: 'white' }}>
                                                    {t.type.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Row>
                                        {/* <Col>
                                            <Card.Img style={{ width: '10rem' }} src={pokemonInfo.sprites.front_defualt}/>
                                            <Card.Text>Original</Card.Text>
                                        </Col> */}
                                        <Col>
                                            <Card.Img style={{ width: '12rem' }} src={pokemonInfo.sprites.front_shiny}/>
                                            <Card.Text>Shiny!</Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className='mt-4'>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <div className='px-4 py-1 rounded' style={{border: '1px black solid' }}>
                                                Abilities
                                            </div>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row className='text-center'>
                                        {pokemonInfo.abilities.map(a =>(
                                            <Col key ={a.ability.name} xs={4} sm={4} md={4} lg={4} xl={4}>
                                                <div className='rounded px-4 py-1'>
                                                    {a.ability.name.toUpperCase()}
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default PokemonInfoPage;
