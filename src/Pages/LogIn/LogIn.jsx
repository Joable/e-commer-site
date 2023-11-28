import styles from './LogIn.module.css';

import { useState } from 'react';

import { errorHandling } from '../../Utils/errorHandling';
import { logUser } from '../../Services/logUser';

import DisplayError from '../../Components/DisplayError/DisplayError';

function LogIn(){
    const [form, setForm] = useState({
        email:"",
        password:"",
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

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        const loggingInUser = async () => {

            const response = await logUser(form.email, form.password);

            if(response.code){
                setErrorMessage(errorHandling(response.code));
                //console.log(response.code)
            };
        };

        loggingInUser();
    };

    return(
        <div className={styles.form}>
            <h2>Log In</h2>

            <form onSubmit={handleSubmit} autoComplete='off' className={styles.login}>

                <label>
                    Email:
                    
                    <input name='email' value={form.email} type="email" onChange={handleChange} />
                </label>

                <label>
                    Password:
                
                    <input name='password' value={form.password} type="password" onChange={handleChange} />
                </label>

                <DisplayError>
                    {errorMessage}
                </DisplayError>

                <button type='submit' className={styles.logInButton}>
                    <b>
                        LOG IN
                    </b>
                </button>
            </form>
        </div>
    );
}

export default LogIn;