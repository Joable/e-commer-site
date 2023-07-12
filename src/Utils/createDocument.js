import firebase from '../Config/Firebase';

export function createDocument(){
    firebase.db.collection('products').add({
        name:"product10",
        price:"1999",
        details:[{
            name:"detailName1",
            description:"detailDescription1"
        },{
            name:"detailName2",
            description:"detailDescription2"
        },{
            name:"detailName3",
            description:"detailDescription3"
        }],
        trend:true,
        category:"furniture"
    });
};
