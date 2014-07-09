/*
//require sync-prompt module

var prompt= require('sync-prompt').prompt;
var name = prompt("What is your name? ");
console.log("name is", name);

// ask user's name 

var prompt= require('sync-prompt').prompt;
var firstName= prompt("What is your first  name? ");
var lastName= prompt("What is your last name? ");
var full= (firstName + " " + lastName);
console.log("Your name is: ", full);

var color = prompt("What is your favorite color? ");
console.log('Your favorite color is: ', color);

var age = prompt("What is your dog's age? ");
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);

var humanAge = age * 7;
console.log('your dog is ' + age + ' years old');
console.log('your dog is '+  humanAge + ' years old');


//Drinking
//
var yourAge = prompt("What is your age? ")
if (yourAge >= 21) {
  console.log("You're old enough to drink, got get pissed.");
}else if (yourAge > 0 === false){
  console.log("that's not a number.");
} else  {
  console.log("You're too young to get into the club.");
}

// Prompt the user do you want to convert farenheight or celsius 
// What temperture do you want?
// output "tmperature you want in other temperature is 

var temperatureChoice = prompt("Do you want to convert to farenheight or celsius? ");
var temperatureDesired = prompt("What temperature do you want?"); 
var number = parseInt(temperatureDesired) ;

var toCelsius=((number * 9 )/5 +32);
var toF= ((number -32)*5)/9;

if (temperatureChoice.toLowerCase() === 'farenheight'){
  console.log (temperatureDesired + " C in F is "+ toCelsius);
} else if (temperatureChoice.toLowerCase() === 'celsius') {
  console.log(temperatureDesired + " F in C is "+ toF);
} else {
  console.log("no asnwer");
}

//Chyld's code 
//
/*
var scale = prompt('What scale are you using (f/c)?');
var temp  = prompt('What is the temperature? ');

temp = parsInt(temp);
var converted;
var alt;

if(scale === 'f'){
  converted = (temp-32) *5/9;
  alt = f;
  } else {
  converted = ((temp * 9 )/5 +32);
  alt = c;
  }

  console.log(temp+ scale +' is '+ converted+ ' in ' + alt);
*/

// BMI
// Based on these inputs put out BMI
//need weight
//need height
//
//take height and square it
//divide wieght by square of height
// multiply the result by 703 (for inches and pounds)
// answer is your body mass index
//
 var heightfeet = prompt("What is your height, ft: ");
 var heightinches = prompt("What is your height, inches: ");
 var weight = prompt("What is your weight, in pounds? ");

 heightfeet = parseInt(heightfeet);
 heightinches = parseInt(heightinches);

 height = heightfeet * 12 + heightinches;
 weight = parseInt(weight);

 var BMI=( weight/ (Math.pow(height, 2))) * 703;

 console.log("Your BMI is " +BMI.toFixed(1));
/*

if (BMI < 18){
  console.log("You are underweight");
} else if ( BMI < 18.5) {
  console.log("You are thin for your height");
} else if (BMI >= 18.6 && BMI <= 24.9) {
  console.log("You have a healthy weight");
} else if (BMI > 25 && BMI <29.9) {
  console.log("You are overweight.");
} else if (BMI > 30) {
  console.log("You are obese");
}

*/
