import firebase from "../Config/firebase.js";

export async function createUser(email, password){
    try{
       const response = await firebase.auth.createUserWithEmailAndPassword(email, password);
       
       return response;

    }catch(e){
        return e;
    };

}