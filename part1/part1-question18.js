let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

// print out the value of the property if the property starts with an R, 
// or if the value of that property is an odd number
for(property in statistics){
    if(property.charAt(0) == 'r' || statistics[property]%2 == 1){
        console.log(statistics[property]);
    } 
    
}