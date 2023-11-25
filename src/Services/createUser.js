import firebase from "../Config/firebase.js";

export async function createUser(email, password){
    let user;

    try{
       const response = await firebase.auth.createUserWithEmailAndPassword(email, password);
       user = response.user;

    }catch(e){
        console.log(e);
    };

    return user;

}