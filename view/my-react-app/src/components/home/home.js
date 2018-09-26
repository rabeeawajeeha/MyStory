import React, {Component} from 'react';
import 'whatwg-fetch';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state ={
            isLoading: true,
            signUpError:'',
            signInError:''
        };
    }

    componentDidMount(){
        fetch('/api/')
    }



    render() {
        const{
            isLoading,
        } =this.state;

        if (isLoading){
            reutrn(<div><p>Loading...</p></div>);
        }
    }
    return(
        <div>

        </div>
    );
}