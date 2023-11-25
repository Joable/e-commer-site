import styles from './LogIn.module.css';

import { useState } from 'react';

function LogIn(){
    const [form, setForm] = useState({
        email:"",
        password:"",
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
        
        console.log(form)
    };

    return(
        <div className={styles.form}>
            <form onSubmit={handleSubmit} autoComplete='off' className={styles.login}>

                <label>
                    Email:
                    
                    <input name='email' value={form.email} type="email" onChange={handleChange} />
                </label>

                <label>
                    Password:
                
                    <input name='password' value={form.password} type="password" onChange={handleChange} />
                </label>

                <button type='submit'>
                    Log In
                </button>
            </form>
        </div>
    );
}

export default LogIn;