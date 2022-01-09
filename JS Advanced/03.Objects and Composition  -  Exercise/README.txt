01. Calorie Object
Write a function that composes an object by given properties. The input comes as an array of strings. Every even 
index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 
100 grams of the given product. Assign each value to its corresponding property and print it on the console.
The input comes as an array of string elements.

02. Construction Crew
Write a program that receives a worker object as a parameter and modifies its properties. Workers have the 
following structure:
{ weight: Number,
  experience: Number,
  levelOfHydrated: Number,
  dizziness: Boolean }
Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters. If you receive a 
worker who’s dizziness property is set to true it means he needs to intake some water in order to be able to work 
correctly. The required amount is 0.1ml per kilogram per year of experience. The required amount must be added to 
the existing amount. Once the water is administered, change the dizziness property to false.
Workers who do not have dizziness should not be modified in any way. Return them as they were.

03. Car Factory
Write a program that assembles a car by given requirements out of existing components. The client will place an 
order in the form of an object describing the car. You need to determine which parts to use to fulfil the client’s 
order. You have the following parts in storage:
An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are 
numbers. When selecting an engine, pick the smallest possible that still meets the requirements.
	Small engine: { power: 90, volume: 1800 }
	Normal engine: { power: 120, volume: 2400 }
	Monster engine: { power: 200, volume: 3500 }
A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and 
can paint it any color.
Hatchback: { type: 'hatchback', color: <as required> }
Coupe: { type: 'coupe', color: <as required> }
The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in 
inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 

04. Heroic Inventory
In the era of heroes, every hero has his own items which make him unique. Create a function which creates a 
register for the heroes, with their names, level, and items, if they have such. The register should accept data in
a specified format, and return it presented in a specified format. 
The input comes as array of strings. Each element holds data for a hero, in the following format:
“{heroName} / {heroLevel} / {item1}, {item2}, {item3}...” 
You must store the data about every hero. The name is a string, the level is a number and the items are all
strings.
The output is a JSON representation of the data for all the heroes you’ve stored. The data must be an array of 
all the heroes. Check the examples for more info.

05. Lowest Prices in Cities
You will be given several towns, with products and their price. You need to find the lowest price for every 
product and the town it is sold at for that price.
The input comes as array of strings. Each element will hold data about a town, product, and its price at that town.
The town and product will be strings, the price will be a number. The input will come in the following format:
{townName} | {productName} | {productPrice}
If you receive the same town and product more than once, you should update the old value with the new one.
As output you must print each product with its lowest price and the town at which the product is sold at that 
price. If two towns share the same lowest price, print the one that was entered first. 
The output, for every product, should be in the following format:
{productName} -> {productLowestPrice} ({townName})
The order of output is - order of entrance. See the examples for more info.



