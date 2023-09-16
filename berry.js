
// for (let i = 0; i < 100; i++) {

    fetch(`https://pokeapi.co/api/v2/berry/1`)

.then((respo) =>{
    return respo.json()
}).then((data) => {
    console.log(`Name: ${data.name}`);
    console.log(`ID: ${data.id}`);
    console.log(`Growth Time: ${data.growth_time} hours`);
    console.log(`Max Harvest: ${data.max_harvest} times`);
    console.log(`Size: ${data.size}`);
    console.log(`Smoothness: ${data.smoothness}`);
    console.log(`Soil Dryness: ${data.soil_dryness}`);
    console.log(`Firmness: ${data.firmness.name}`);
    console.log(`Item: ${data.item.name}`);
    console.log(`Item: ${data.natural_gift_type.name}`);
})
    
// }
