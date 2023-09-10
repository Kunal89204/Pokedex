
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
fetch(`https://pokeapi.co/api/v2/berry-flavor/1`)

.then((respo) =>{
    return respo.json()
}).then((data) => {
    // console.log(`Name: ${data.name}`);
    // console.log(`ID: ${data.id}`);
    // console.log(`Growth Time: ${data.growth_time} hours`);
    // console.log(`Max Harvest: ${data.max_harvest} times`);
    // console.log(`Size: ${data.size}`);
    // console.log(`Smoothness: ${data.smoothness}`);
    // console.log(`Soil Dryness: ${data.soil_dryness}`);
    // console.log(`Firmness: ${data.firmness.name}`);
    console.log(`Potency: ${data.berries.potency}`);
})