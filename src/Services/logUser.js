import firebase from "../Config/firebase";

export async function logUser(email, password){

    try{
        const response = await firebase.auth.signInWithEmailAndPassword(email, password);

        return response;
    }catch(e){

        return e;
    };
}
