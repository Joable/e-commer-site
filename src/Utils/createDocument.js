import firebase from '../Config/Firebase';

export function createDocument(){
    firebase.db.collection('products').add({
        name:"Sennheiser Hd 206",
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
        trend:false,
        category:"peripherals",
        images:[
            "gs://e-commerce-fcdf9.appspot.com/Peripherals/Sennheiser Hd 206/Headphone1.PNG",
            "gs://e-commerce-fcdf9.appspot.com/Peripherals/Sennheiser Hd 206/Headphone2.PNG",
            "gs://e-commerce-fcdf9.appspot.com/Peripherals/Sennheiser Hd 206/Headphone3.PNG"
        ]
    });
};