import React, {Component} from 'react'
import {login, resetPassword} from '../helpers/auth'
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import styled from 'styled-components';



const StyledTextField = styled(TextField)`
    width: 100%;
    display: inline;
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;


function setErrorMsg(error) {
    return {
        loginMessage: error
    }
}

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {loginMessage: null}
        this.handleOnChange = this.handleOnChange.bind(this);
    }


    handleSubmit = (e) => {
        e.preventDefault()
        login(this.state.epost, this.state.passord)
            .catch((error) => {
                console.log(error, 'e')
                this.setState(setErrorMsg('Invalid username/password.'))
            })
    };

    handleOnChange(e) {
        this.setState({[e.target.id]: e.target.value,})
    }

    resetPassword = () => {
        resetPassword(this.email.value)
            .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
            .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
    };

    render() {
        return (
            <div>
                <Typography type="display1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <StyledTextField
                        id="epost"
                        label="E-post"
                        margin="normal"
                        onChange={this.handleOnChange}
                    />
                    <StyledTextField
                        id="passord"
                        label="Passord"
                        margin="normal"
                        type="password"
                        onChange={this.handleOnChange}
                    />

                    {
                        this.state.loginMessage &&
                        <div className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span>
                            &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword}
                                                               className="alert-link">Forgot Password?</a>
                        </div>
                    }

                    <StyledButtonWrapper>
                        <Button type="submit">Login</Button>
                    </StyledButtonWrapper>
                </form>
            </div>
        )
    }
}
