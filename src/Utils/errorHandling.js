export function errorHandling(code){
    switch(code){
        case "auth/invalid-login-credentials":
            return "Incorrect e-mail or password";
        default:
            return code;
    }
}