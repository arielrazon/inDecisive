import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import { Button, Grid, Icon, Rating, Image } from "semantic-ui-react"
import { Carousel, CarouselInner, CarouselItem, CarouselCaption, View, Mask, Container } from 'mdbreact';
import { Card, CardBody } from 'mdbreact';
import carousel01 from "../../components/Header/carousel01.jpg";
import carousel02 from "../../components/Header/carousel02.jpg";
import carousel03 from "../../components/Header/carousel03.jpg";
import jwt_decode from 'jwt-decode';
import "./Favorites.css"

class Favorites extends Component {

    state = {
        userId: "5bcfa7d189d2b336c4cf03c4",
        userName: "Test",
        modal: false,
        sitters: []
    };

    parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        console.log(JSON.parse(window.atob(base64)));
    };

    componentDidMount() {
        const token = localStorage.getItem("jwtToken");
        var base64Url = token.split(' ')[1];
        var decoded = jwt_decode(base64Url)
        console.log(decoded);
        this.setState({
            userId: decoded.id,
            userName: decoded.name
        }, () => {
            console.log(this.state);
            console.log(this.state.userName);
            this.loadSitters();
        })

    };

    loadSitters = async () => {
        const response = await fetch('/api/member/memberFavorites/' + this.state.userId);
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
        this.setState({ sitters: body.favoritesProfile })
    };

    loadSitterProfile = (sitterData) => {
        this.props.history.push({
            pathname: '/sitterProfile',
            state: sitterData
        })
    };

    renderSitters = () => {
        return this.state.sitters.map((sitter, i) => {
            return <div key={i} id="sitterDiv">
                <Container>
                    <Row>
                        <Col size="sm-12 md-12">
                            <Card className="w-100 z-depth-5" id="favoriteCard3">
                                <CardBody id="cardBody">
                                    <Row>
                                        <Col size="sm-12 md-3">
                                            <p><Image src={sitter.profilePhoto} alt="profile pic" size="medium" className="img-fluid hoverable mx-auto d-block" circular /></p><br />
                                        </Col>
                                        <Col size="sm-12 md-3" style={{ textAlign: "center" }}>
                                            <h2 id="info">{sitter.name}</h2>
                                            <Rating maxRating={5} defaultRating={sitter.rating} icon='star' size='massive' disabled />
                                        </Col>
                                        <Col size="sm-12 md-3">
                                            <h2 id="info">${sitter.price}/per night</h2>
                                        </Col>
                                        <Col size="sm-12 md-3">
                                            <Button animated id="sitterButton" className="mx-auto d-block" style={{ marginBottom: "100px" }} onClick={() => this.loadSitterProfile(sitter)}>
                                                <Button.Content visible>Go to {sitter.name}'s Profile</Button.Content>
                                                <Button.Content hidden>
                                                    <Icon name='arrow alternate circle right outline' size="large" />
                                                </Button.Content>
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        })
    };

    render() {
        return (
            <div className="favorites-page">

                <style>
                    {`
                    body > div,
                    body > div > div,
                    body > div > div > div.favorites-page {
                    height: 100%;}
                `}
                </style>

                <Grid textAlign='center' verticalAlign='middle'>
                    <Row>
                        <Col size="sm-12 md-12">
                            <Carousel
                                activeItem={1}
                                length={3}
                                showControls={true}
                                showIndicators={false}
                                className="z-depth-1">
                                <CarouselInner>
                                    <CarouselItem itemId="1">
                                        <View>
                                            <img className="d-block w-100 img-fluid" src={carousel01} alt="First slide" />
                                            <Mask overlay="black-slight"></Mask>
                                        </View>
                                        <CarouselCaption>
                                            <h3 id="h3-responsive">PetSitter</h3>
                                        </CarouselCaption>
                                    </CarouselItem>
                                    <CarouselItem itemId="2">
                                        <View>
                                            <img className="d-block w-100" src={carousel02} alt="Second slide" />
                                            <Mask overlay="black-slight"></Mask>
                                        </View>
                                        <CarouselCaption>
                                            <h3 id="h3-responsive">PetSitter</h3>
                                        </CarouselCaption>
                                    </CarouselItem>
                                    <CarouselItem itemId="3">
                                        <View>
                                            <img className="d-block w-100" src={carousel03} alt="Third slide" />
                                            <Mask overlay="black-slight"></Mask>
                                        </View>
                                        <CarouselCaption>
                                            <h3 id="h3-responsive">PetSitter</h3>
                                        </CarouselCaption>
                                    </CarouselItem>
                                </CarouselInner>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="sm-10 md-12">
                            <h1 id="favoritestitle">{this.state.userName}'s Favorites</h1>
                        </Col>
                    </Row>
                    {this.renderSitters()}
                </Grid>
            </div>
        )
    }
}

export default Favorites;