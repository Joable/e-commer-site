export function createInventoryById(response){
    let newInventory = {}; 
    let idObject = {};
    
    response.forEach((product) =>{
        idObject[product.id] = product.data();

        Object.assign(newInventory, idObject);     
    });

    return newInventory;
};
