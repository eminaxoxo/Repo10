var myClothes = {
hat : "Fedora",
shirt : "Nike",
shoes : "Converse"
};

function myFunction(myObj) {
    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shirt;
    var shoesValue = myClothes.shoes;
    return {
        hatValue, 
        shirtValue, 
        shoesValue}
};

//only change code above this line 
console.log (myFunction(myClothes));
module.exports = myFunction(myClothes);

//provjeriti 