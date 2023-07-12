export function iterator(num){
    let components = [];

        for(let i = 0 ; i < num ; i++){
            components.push({
                name:`Product${i+1}`,
                price:`Price${i+1}`
            });
        };

        return components;
}