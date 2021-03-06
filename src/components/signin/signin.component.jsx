import React from 'react';
import './signin.component.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({'emal':'','password':''});
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email'
                    type='email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label="Email"
                    required />
                    {/* <label>Email</label> */}
                    <FormInput 
                    name='password'
                    type='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="Password"
                    required />
                    {/* <label>Password</label> */}
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;