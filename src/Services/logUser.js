import firebase from "../Config/firebase";

export async function logUser(email, password){
    let user;
    
    try{
        const response = await firebase.auth.signInWithEmailAndPassword(email, password);

        user = response;
    }catch(e){

        return e;
    };

    return user;
}
