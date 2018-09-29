import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {withFormik, Form, Field} from 'formik';
import Yup from 'yup';

const App = ({
    values,
    errors

}) => (
    <Form>
        <Field component = "select" name="experience">
        <option value = "Experience">Experience</option>
        <option value= "Restaurant">Restaurant</option>    
        </Field>
        <Field type ="location" name="location" placeholder="location" />
        <button>Submit</button>
    </Form>

)

const FormikApp = withFormik({
    mapsPropsToValues({ location, experience }){
        return{
            location: location || '',
            experience: experience || 'experience'
        }
    },
validationSchema: Yup.object().shape({
    
})


})(App)

ReactDOM.render(<FormikApp />, document.getElementById('root'));

