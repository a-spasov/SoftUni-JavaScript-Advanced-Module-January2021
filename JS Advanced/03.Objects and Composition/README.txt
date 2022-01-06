01. City Record
You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will 
need to set as properties of an object and return it.

02. Town Population
You have been tasked to create a registry for different towns and their population.
The input comes as array of strings. Each element will contain data for a town and its population in the 
following format: "{townName} <-> {townPopulation}". If you receive the same town twice, you should add the given 
population to the current one. As output, you must print all the towns, and their population.

03. City Taxes
This task is an extension of Problem 1, you may use your solution from that task as a base.
You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will 
need to set as properties of an object and return it. In addition to the input parameters, the object must have a 
property taxRate with initial value 10, and three methods for managing the city:
	• collectTaxes() - Increase treasury by  population * taxRate;
	• applyGrowth(percentage) - Increase population by given percentage;
	• applyRecession(percentage) - Decrease treasury by given percentage;
Round down the values after each calculation.

04. Object Factory
Create a function that can compose objects by copying functions from a given library of functions. You will receive
two parameters – a library of functions as an associative array (object) and an array of orders, represented as 
objects. You must return a new array – the fulfilled orders. The first parameter will be an object where each 
property is a function. You will use this library of functions to compose new objects. The second parameter is an 
array of orders. Each order is an object with the following shape:
{
  template: [Object],
  parts: string[]
}
The template is an object that must be copied. The parts array contains the names of required functions as strings.
You must create and return a new array, by fulfilling all orders from the orders array. To fulfill an order, create
a copy of the object’s template and then add to it all functions, listed in the parts array of the order, by 
taking them from the function library (first parameter to your solution).

05.	Assembly Line
Create a function that returns a library of decorator functions. They can be used to compose different 
functionality in a car object that they receive as argument.
Your solution must return an object, containing three decorator functions:
  hasClima – compose air conditioning controls into the passed in object. This function takes an object as parameter 
  and adds to it the following properties:
	• temp – number with default value 21;
	• tempSettings – number with default value 21;
	• adjustTemp – function which takes no arguments. If temp is less than tempSettings, this function adds 1 
	to temp. If temp is more than tempSettings, it decreases temp by 1. If temp and tempSettings are equal, the
 	function does nothing.
  hasAudio – compose audio player functionality into the passed in object. This function takes an object as 
  parameter and adds to it the following properties:
	• currentTrack – object with properties name (string) and artist (string). Default value is null;
	• nowPlaying – function, which prints on the console the text "Now playing '{currentTrack.name}' 
	by ${currentTrack.artist}", where name and artist are properties of the currentTrack object.
	If currentTrack is null, this function does nothing.
  hasParktronic – compose parking aid functionality into the passed in object. This function takes an object as 
  parameter and adds to it the following properties:
	• checkDistance – function, which takes a single argument distance (number) and prints a message on the 
console, depending on its value: distance < 0.1 – "Beep! Beep! Beep!"; 0.1 <= distance < 0.25 – "Beep! Beep!";
0.25 <= distance < 0.5 – "Beep!". In any other case, print an empty string.



