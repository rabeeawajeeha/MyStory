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
            
        };
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



    render() {
        const{
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPassword,
        } =this.state;

        if (isLoading){
            return(<div><p>Loading...</p></div>);
        }
    if (!token) {
        return (
        
        <div>
          <div>
      

<p>Sign In </p>
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password"/>
<button>Sign In</button>
</div>
<br />
<br />
<div>
      <p>Sign Up</p>
    <input type="text" placeholder="First Name" />< br />
    <input type="text" placeholder="Last Name" />< br />
    <input type="text" placeholder="Location/City" />< br />
      <input type="email" placeholder="Email" />< br />
      <input type="password" placeholder="Password"/>< br />
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