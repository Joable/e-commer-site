import styles from './SignIn.module.css';

import { useState } from 'react';

import { createUser } from '../../Services/createUser';
import { errorHandling } from '../../Utils/errorHandling';

import DisplayError from '../../Components/DisplayError/DisplayError';

function SignIn(){
    const [form, setForm] = useState({
        username:"",
        email:"",
        password:"",
        confirmEmail:"",
        confirmPassword:""
    });
    const [errorMessage, setErrorMessage] = useState(""); 

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setForm({
            ...form,
            [name] : value
        });
    };

    const confirm = () => {
        let response = "";

        if(form.email !== form.confirmEmail){
            response = {code: "auth/cannot-confirm-email"};

        } else if(form.password !== form.confirmPassword){
            response = {code: "auth/cannot-confirm-password"};
        };

        return response;
    };

    const handleSubmit = (event) =>{
        let response;
        event.preventDefault();

        const userCreation = async () =>{

            response = confirm();

            if(!response){
                response = await createUser(form.email, form.password);
            }
            
            if(response.code){
                setErrorMessage(errorHandling(response.code));
            }
        };
        
        userCreation();

    };

    return(
        <div className={styles.form}>
            <h2>Sign In</h2>

            <form onSubmit={handleSubmit} autoComplete='off' className={styles.signin}>
                <label>
                    Username:
                    
                    <input name='username' value={form.username} type="text" onChange={handleChange} />
                </label>

                <label>
                    Email:
                    
                    <input name='email' value={form.email} type="email" onChange={handleChange} />
                </label>

                <label>
                    Confirm Email:
                
                    <input name='confirmEmail' value={form.confirmEmail} type="email" onChange={handleChange} />
                </label>

                <label>
                    Password:
                
                    <input name='password' value={form.password} type="password" onChange={handleChange} />
                </label>

                <label>
                    Confirm Password:
                    
                    <input name='confirmPassword' value={form.confirmPassword} type="password" onChange={handleChange} />
                </label>

                <DisplayError>
                    {errorMessage}
                </DisplayError>

                <button type='submit' className={styles.createAccountButton}>
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignIn;