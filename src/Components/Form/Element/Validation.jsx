import React from "react";
import { ShowErrors } from "./Errors";

const Input = ({label, type, name, onChange}) => {
    return (
        <div>
        <label> {label}:</label>
        <br />
        <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
        <br />
        </div>
    )
}

export default class Validation extends React.Component{
    state ={
        email: '',
        password:'',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log (this.state);

        const {email, password} = this.state;

        let message = [];

        if(email.length === 0) {
            message = [...message, 'Email tidak boleh kosong'];
        }

        if(password.length === 0) {
            message = [...message, 'Password tidak boleh kosong'];
        }

        if(message.length > 0) {
            this.setState({
                errors: message
            }, () => console.log(this.state.errors));


        }
    }

    render() {
        const style ={
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
            
        }

        return(
            <div style={style}>
                <ShowErrors errors={this.state.errors} />
                <h1>Login page</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="email" label="Email" 
                    onChange={value => this.setState({email: value}) }/>
                    <Input type="password" name="password" label="Password" 
                    onChange={value => this.setState({password: value}) } />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}