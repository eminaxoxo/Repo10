// only change code below this line 
var myPet = {
    species: "Cane Corso", 
    name : "Cookie",
    legs : 4,
    friends : ["Tarik", "Faruk"]
}

function myFunction(myObj){
    return myObj;
}
// only change code above this line 

console.log (myFunction(myPet)); //change this line 

module.exports = { myPet, myFunction };