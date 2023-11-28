export function errorHandling(code){
    switch(code){
        case "auth/invalid-login-credentials":
            return "Incorrect e-mail or password.";

        case "auth/email-already-exists":
        case "auth/email-already-in-use":
            return "User e-mail already in use.";

        case "auth/invalid-argument":
            return "An invalid argument has been submitted.";

        case "auth/invalid-email":
            return "The provided e-mail is invalid.";

        case "auth/invalid-password":
            return "The provided password is invalid.";

        case "auth/weak-password":
           return "The password must be longer than 6 characters.";

        case "auth/cannot-confirm-email":
            return "The emails must match."   

        case "auth/cannot-confirm-password":
            return "The passwords must match."
        default:
            return code;
    }
}