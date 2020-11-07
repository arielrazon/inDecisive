import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from "mdbreact";
import PSlogo from "./logo_icon.png";
import "./SignUp.css";
/* import Button from "../../components/Button";
import { Input } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid"; */

class SignUp extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        response: "",
        modal: false
    };

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    submit = () => {
        this.callApi()
        .catch(err => console.log(err));
        this.toggleModal();
        console.log(this.state.response);
    }


    callApi = async () => {
        await fetch('/api/member/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            "name" : document.getElementById("name").value,
            "email" : document.getElementById("email").value,
            "password" : document.getElementById("password").value
            })
        }).then(response => {
            if (response.ok) {
              response.json().then(json => {
                  
                  this.setState({response: JSON.stringify(json.name)});
                return json;
              });
            } 
            
            else if (response.status !== 200) {
                response.json().then(json => {
                    this.setState({response: JSON.stringify(json)});
                    console.log(json);
                });
                console.log(response);
                throw Error(response.message);
            }
          });  
      };

    render() {
        return (
            <div className="login-form">
                <style>{`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                    height: 100%;}
                `}
                </style>
                <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' textAlign='center' id="headertitle">
                            <Image src={PSlogo} /> Sign-up for an account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Full Name' className="forminputz" id="name"/> 
                                <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' className="forminputz" id="email"/>
                                <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                className="forminputz"
                                id="password"
                                />
                                <Button fluid size='large' id="signUpButton" onClick={this.submit}>Sign-up</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-notify modal-info text-white">
                                    <ModalHeader toggle={this.toggle} id="modalheader">Thank you for signing up!</ModalHeader>
                                    <ModalBody>
                                        <h1> Hi {this.state.response}! You can now sign-in <a href="/">here</a>.</h1>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button id="modalButton" onClick={this.toggleModal}>Close</Button>{' '}
                                    </ModalFooter>
                                </Modal>
                            </Segment>
                        </Form>
                        <Message id="datMessage">
                            Already a member?  <a href="/">Log-in here!</a>
                        </Message>
                    </Grid.Column>
                </Grid>
  
                    {/* <Button onClick={this.toggle}>Modal</Button> */}
                    
            </div>
        )
    }
}

export default SignUp;