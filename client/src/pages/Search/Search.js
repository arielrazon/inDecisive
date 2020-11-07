import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import { Carousel, CarouselInner, CarouselItem, CarouselCaption, View, Mask } from 'mdbreact';
import { Form, Button, Grid, Image, Rating } from "semantic-ui-react";
import carousel01 from "../../components/Header/carousel01.jpg";
import carousel02 from "../../components/Header/carousel02.jpg";
import carousel03 from "../../components/Header/carousel03.jpg";
import jwt_decode from 'jwt-decode';
import "./Search.css";

class Search extends Component {

    state = {
        name: "",
        age: "",
        rating: "",
        response: "",
        profilePhoto: "",
        city: "",
        sitters: [], 
        searchInput: ""
    };

    parseJwt = (token)  => {
        var base64Url = token.split(' ')[1];
        var decoded = jwt_decode(base64Url)
        console.log(decoded);
    };

    componentDidMount() {
        const token = localStorage.getItem("jwtToken");
        this.parseJwt(token);
        console.log(token);
    };

    submit = () => {
        this.loadSitters()
        .catch(err => console.log(err));
        console.log(this.state.response);
    };

    loadSitters = async () => {
        const response = await fetch('/api/petSitter/search/' + this.stringFormatter(this.state.searchInput));
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
        this.setState({ sitters: body.serchedSitters })
    };

    loadSitterProfile = (sitterData) => {
        this.props.history.push({
            pathname: '/sitterProfile',
            state: sitterData
        })
    };

    onChange = (event) => {
        const { value } = event.target;
        this.setState({
            searchInput:value
        })
    };

    stringFormatter = (str) => {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    };

    renderSitters = () => {
        return this.state.sitters.map((sitter, i) => {
            return <div key={i} id="sitterDiv">
                <p><Image src={sitter.profilePhoto} alt="profile pic" size="medium" className="img-fluid hoverable mx-auto d-block" circular onClick={() => this.loadSitterProfile(sitter)}/></p>
                <span id="sitterNameAge">{sitter.name}, {sitter.age}</span><br /><br />
                <Rating maxRating={5} defaultRating={sitter.rating} icon='star' size='massive' disabled /><br /><br />
            </div>
        })
    };

    render() {
        console.log(this.state)
        return (
            <div className="search-form">
                <style>
                    {`
                    body > div,
                    body > div > div,
                    body > div > div > div.search-form {
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
                        <Col size="sm-10 md-6">
                            <h1 id="searchcitytitle">Search by City</h1>
                            <Form size='large'>

                                <Form.Input
                                    fluid
                                    icon='search'
                                    iconPosition='left'
                                    placeholder='Search by City'
                                    type='search'
                                    className="forminputz"
                                    value={this.state.searchInput}
                                    onChange={this.onChange}
                                />
                                <Button fluid size='large' id="searchButton" onClick={this.loadSitters}>
                                    Search
                            </Button>
                            </Form>
                        </Col>
                    </Row>
                       
                    <Row>
                        <Col size="sm-10 md-6" style={{ textAlign: "center" }}>
                            {this.renderSitters()}
                        </Col>
                    </Row> 
                </Grid>
            </div> 
        )
    }
}

export default Search;