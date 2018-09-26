import React, {Component} from 'react';
import 'whatwg-fetch';

import {
    getFromStorage,
    setInStorage,
} from "../../../app.js/utils/storage";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state ={
            isLoading: true,
            token: '',
            signUpError:'',
            signInError:'',
            signInEmail: '',
            signInPassword:'',
            signUpFirstName:'',
            signUpLastName:'',
            signUpEmail:'',
            signUpPassword:'',
            signUpLocation:'',
            
        };

this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
this.onTextboxChangeSignInPassword= this.onTextboxChangeSignInPassword.bind(this);
this.onTextboxChangeSignUpEmail= this.onTextboxChangeSignUpEmail.bind(this);
this.onTextboxChangeSignUpPassword= this.onTextboxChangeSignUpPassword.bind(this);
this.onTextboxChangeSignUpFirstName= this.onTextboxChangeSignUpFirstName.bind(this);
this.onTextboxChangeSignUpLastName= this.onTextboxChangeSignUpLastName.bind(this);
this.onTextboxChangeSignUpLocationName= this.onTextboxChangeSignUpLocationName.bind(this);
    }

    componentDidMount(){
        const token = getFromStorage('my-react-app');
        if(token) {

            fetch('/api/account/verify?token=' + token)
            .then(res => res.json())
            .then(json => {
                if(json.success) {
                    this.setState({
                        token,
                        isLoading:false
                    });

                }else {
                    this.setState({
                        isLoading:false,
                    });
                }
            });
        
        
        }else{
            this.setState({
                isLoading: false,
            });
        }
    }


    onTextboxChangeSignInEmail(event){
        this.setState({
            signInEmail:event.target.value,
        });

    }
    onTextboxChangeSignInPassword(event){
        this.setState({
            signInPassword:event.target.value,
        });

    }
    onTextboxChangeSignUpEmail(event){
        this.setState({
            signUpEmail:event.target.value,
        });

    }
    onTextboxChangeSignUpPassword(event){
        this.setState({
            signUpPassword:event.target.value,
        });

    }
    onTextboxChangeSignUpFirstName(event){
        this.setState({
            signUpFirstName:event.target.value,
        });
        

    }
    onTextboxChangeSignUpLastName(event){
        this.setState({
            signUpLastName:event.target.value,
        });
        

    }
    onTextboxChangeSignUpLocationName(event){
        this.setState({
            signUpLocation:event.target.value,
        });
        

    }
    




    render() {
        const{
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPassword,
            signUpFirstName,
            signUpLastName,
            signUpEmail,
            signUpPassword,
            signUpLocation,
        } =this.state;

        if (isLoading){
            return(<div><p>Loading...</p></div>);
        }
    if (!token) {
        return (
        
        <div>
          <div>
      {
          (signInError) ? (
              <p>{signInError}</p>
          ) : (null)
      }

<p>Sign In </p>
<input type="email" placeholder="Email" value={signInEmail} />
<input type="password" placeholder="Password" value={signInPassword}/>
<button>Sign In</button>
</div>
<br />
<br />
<div>
      <p>Sign Up</p>
    <input type="text" placeholder="First Name" value={signUpFirstName} />< br />
    <input type="text" placeholder="Last Name" value={signUpLastName}/>< br />
    <input type="text" placeholder="Location/City" value={signUpLocation} />< br />
      <input type="email" placeholder="Email" value={signUpEmail} />< br />
      <input type="password" placeholder="Password" value={signUpPassword}/>< br />
      <button>Sign Up </button>
      </div>
            </div>
            );
    }
    return(
        <div>
<p> Account </p>
        </div>
    );
    }
}