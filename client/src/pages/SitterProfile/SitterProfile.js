import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import { Carousel, CarouselInner, CarouselItem, CarouselCaption, View, Mask } from 'mdbreact';
import { Grid, Image, Rating, Icon, Button } from "semantic-ui-react";
import { Card, CardBody, CardHeader, Modal, ModalHeader, ModalBody, Fa, ModalFooter, Badge } from 'mdbreact';
import carousel01 from "../../components/Header/carousel01.jpg";
import carousel02 from "../../components/Header/carousel02.jpg";
import carousel03 from "../../components/Header/carousel03.jpg";
import jwt_decode from 'jwt-decode';
import "./SitterProfile.css";

class SitterProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            sitterId: this.props.location.state._id,
            userId: "5bc20da7a239a81071fbb325"
        };
    };

    parseJwt = (token)  => {
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
            userId: decoded.id
        }, () => {
            console.log(this.state)
        })
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    addFavorite = (userId, sitterId) => {
        console.log(userId, sitterId);
        fetch("/api/member/addFavorite/"+userId+"/"+sitterId, {
            method: "PUT",
            body: JSON.stringify({_id: sitterId})
        })
        .then(response => {
            console.log(response)
        });
    }

    render() {
        console.log(this.props);
        return (
            <div className="sitterprofileDiv">
                <style>
                    {`
                    body > div,
                    body > div > div,
                    body > div > div > div.sitterprofileDiv {
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
                        <Col size="sm-12 md-12">
                            <h1 id="profiletitle">Profile on {this.props.location.state.name}</h1>
                        </Col>
                    </Row>

                    <Row>
                        {/* Left Column */}
                        <Col size="sm-12 md-5" style={{ textAlign: "center" }} id="leftColumn">

                            <p><Image src={this.props.location.state.profilePhoto} alt="profile pic" size="medium" className="img-fluid hoverable mx-auto d-block" circular /></p><br />
                            <Rating maxRating={5} defaultRating={this.props.location.state.rating} icon='star' size='massive' disabled /><br />
                            <h2 id="pricetitle">Price: ${this.props.location.state.price}/night</h2>
                            <span id="AddtoFavorites" ><Icon circular inverted name='heart' size="small" color='red' onClick={()=>this.addFavorite(this.state.userId,this.state.sitterId)}/>Add to Favorites</span><br /><br /><br />
                            <Button animated id="contactsitterButton" className="mx-auto d-block" style={{ marginBottom: "100px" }} onClick={this.toggle}>
                                <Button.Content visible>Contact {this.props.location.state.name}</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='mail' />
                                </Button.Content>
                            </Button>
                        </Col>

                        {/* Right Column */}
                        <Col size="sm-12 md-7" style={{ textAlign: "center" }}>
                            <Card className="z-depth-5" id="favoriteCard2">
                                <CardHeader style={{ background: "#0d2c38", color: "#ffffff", fontFamily: 'Raleway'}}>Why You Should Hire Me</CardHeader>
                                <CardBody>
                                    <h2 id="sitterSummary">
                                        "{this.props.location.state.summary}"
                                    </h2>
                                </CardBody>
                            </Card>
                            <Card className="z-depth-5" id="favoriteCard2">
                                <CardHeader style={{ background: "#0d2c38", color: "#ffffff", fontFamily: 'Raleway' }}>More Information</CardHeader>
                                <CardBody>
                                    <h2 className="profileSubtitle">City: {this.props.location.state.city}</h2>
                                    <h2 className="profileSubtitle">Years of Experience: {this.props.location.state.yearsOfExperience} years</h2>
                                    <h2 className="profileSubtitle">Types of Animals: {this.props.location.state.typesOfAnimals}</h2>
                                    <h2 className="profileSubtitle">Availability: {this.props.location.state.availability}</h2>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="text-white">
                        <ModalHeader toggle={this.toggle} id="modalheaderProfile">Contact Information for {this.props.location.state.name}</ModalHeader>
                        <ModalBody>
                            <h1 id="contactTitles"><Fa size="1x" icon="envelope" className="ml-1"/> Email: </h1>
                            <h1><Badge color="warning" pill>{this.props.location.state.email}</Badge></h1>
                            <h1 id="contactTitles"><Fa size="1x" icon="mobile-phone" className="ml-1"/> Phone Number: </h1>
                            <h1><Badge color="warning" pill>{this.props.location.state.phone}</Badge></h1>
                        </ModalBody>
                        <ModalFooter>
                            <Button id="modalButtonProfile" onClick={this.toggle}>Close</Button>{' '}
                        </ModalFooter>
                    </Modal>
                </Grid>
            </div>
        )
    }
}

export default SitterProfile;