import styles from './SignIn.module.css';

function SignIn(){
    return(
        <>
            <form action="">
                <label>
                    Username:
                    
                    <input type="text" />
                </label>

                <label>
                    Email:
                    
                    <input type="email" />
                </label>

                <label>
                    Confirm Email:
                
                    <input type="email" />
                </label>

                <label>
                    Password:
                
                    <input type="password" />
                </label>

                <label>
                    Confirm Password:
                    
                    <input type="password" />
                </label>

                <button>
                    Create Account
                </button>
            </form>
        </>
    );
};

export default SignIn;