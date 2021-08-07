// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = "Chris";
// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = "Nelson";
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName + " " + lastName;
// 4 - Console log the value of `fullName`
console.log( fullName );
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let luckyNumber = 13;
// 6 - Console log this sentence, adding in the variables you created above: 
// 'My name is (full name), and I think (lucky number) is a winner!'.
console.log( "My name is " + fullName + " and I think " + luckyNumber + " is a winner!")
// Refer back to the videos if you need help with this one.

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = true;
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = "dumplings";
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = 1;
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 5;
// 11 - Add two pets to your `pets` variable
pets += 2;
console.log( "Pets: " + pets);
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
const allowedPets = 5
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!", 
if( adventurous == true ){
    console.log( "Adventures are great!" );
}
else{
    // if it's not true, console log "How about we stay home?"
    console.log( "How about we stay home?" );
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if( luckyNumber == 2 && adventurous == "true"){
    console.log( "Roll the dice!");
}
else{
    console.log( "Better not risk it!");
}

// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.


if ( pets < allowedPets ){
    console.log( "I can have more pets!");
}
else if ( pets == allowedPets ){
   console.log( "I have enough pets.");
}
else {
    console.log( "Oh no, I have too many pets!");
}
  

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

let mostPets = 1;
let friendsName = "Suzzie";
let winner;

if ( pets > friendsPets) {
    mostPets = pets;
    winner = firstName;
}
else if ( pets < friendsPets) {

    mostPets = friendsPets;
    winner = friendsName;
}
else {
    mostPets = pets;
    winner = "No one"
}

if ( winner != "No one"){
    console.log ("if/else: Who has the most pets? " + winner + " has the most pets with " + mostPets + ".");
}
else {
    console.log ("if/else: Who has the most pets? " + winner + " has the most pets. Everyone has " + mostPets + " pets.");
}
// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!


switch (pets > friendsPets) {
    case true:
        mostPets = pets
        console.log ("switch: Who has the most pets? " + firstName + " has the most pets with " + mostPets + ".");
        break;
    case false :
        if (pets < friendsPets){
          mostPets = friendsPets  
          console.log ("switch: Who has the most pets? " + friendsName + " has the most pets with " + mostPets + "."); 
        }
        else {
          mostPets = pets
          console.log ("switch: Who has the most pets? No one has the most pets. Everyone has " + mostPets + " pets.");  
        }
        break;
    default:
        console.log ("switch: Cannot determine who has the most pets.");

}
        // I cannot create a scenerio where the default action executes.

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

let adventureOutcome = (adventurous = true) ? "Adventures are great!" : "How about we stay home?";
    console.log( "Ternary: How do you feel about adventures? " + adventureOutcome );

