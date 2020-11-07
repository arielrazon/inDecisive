import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import PSlogo from "./logo_icon.png";
import "./SignIn.css";
import { Redirect } from "react-router-dom";
/* import Button from "../../components/Button";
import { Input } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";  */

class SignIn extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        redirect: false
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };

    submit = () => {
        this.callApi()
      .catch(err => console.log(err));
      console.log(this.state.response);
    }

    callApi = async () => {
        await fetch('/api/member/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            "email" : document.getElementById('email').value,
            "password" : document.getElementById('password').value
            })
        }).then(response => {
            if (response.ok) {
              response.json().then(json => {   
                
                console.log(json)  
                localStorage.setItem('jwtToken', json.token);
                this.setRedirect();
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

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/search' />
        }
    }

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
                            <Image src={PSlogo} /> Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
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
                                <div>
                                    {this.renderRedirect()}
                                    <Button fluid size='large' id="signInButton" onClick={this.submit}>
                                    Log-in
                                </Button>
                                </div>
                            </Segment>
                        </Form>
                        <Message id="datMessage">
                            New to us? <a href="/signup">Sign Up!</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default SignIn;