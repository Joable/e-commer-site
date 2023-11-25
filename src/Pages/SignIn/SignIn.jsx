import { createUser } from '../../Services/createUser';
import styles from './SignIn.module.css';

import { useState } from 'react';

function SignIn(){
    const [form, setForm] = useState({
        username:"",
        email:"",
        password:"",
        confirmEmail:"",
        confirmPassword:""
    });

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
        const userCreation = async () =>{
            const response = await createUser(form.email, form.password);
            
            console.log(response);
        };

        userCreation();
    };

    return(
        <div className={styles.form}>
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

                <button type='submit'>
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignIn;