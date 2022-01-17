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

06. Store Catalogue
You have to create a sorted catalogue of store products. You will be given the products’ names and prices. You need
to order them by alphabetical order. 
The input comes as array of strings. Each element holds info about a product in the following format:
“{productName} : {productPrice}”
The product’s name will be a string, which will always start with a capital letter, and the price will be a number.
There will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
As output you must print all the products in a specified format. They must be ordered exactly as specified above. 
The products must be divided into groups, by the initial of their name. The group’s initial should be printed, and
after that the products should be printed with 2 spaces before their names. For more info check the examples.

07. Towns to JSON
You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where 
each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The
table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will
always contain valid numbers. Check the examples to get a better understanding of your task.
The input comes as an array of strings – the first string contains the table’s headings, each next string is a row
from the table.
The output should be an array of objects wrapped in JSON.stringify(). 
Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!

08. Rectangle
Write a function that creats and returns a rectangle object. The rectangle needs to have a width (Number), height 
(Number) and color (String) properties, which are set via arguments during creation, and a calcArea() method, that
calculates and returns the rectangle’s area.

9. Sorted List
Create a function that returns a special object, which keeps a list of numbers, sorted in ascending order. It must
support the following functionality:
	• add(elemenent) - adds a new element to the collection
	• remove(index) - removes the element at position index
	• get(index) - returns the value of the element at position index
	• size - number of elements stored in the collection
The correct order of the elements must be kept at all times, regardless of which operation is called. Removing and 
retrieving elements shouldn’t work if the provided index points outside the length of the collection (either throw 
an error or do nothing). Note the size of the collection is not a function.

10. Heroes
Create a function returns an object with 2 methods (mage and fighter). This object should be able to create heroes
(fighters and mages). Every hero has a state.
	• Fighters have name, health = 100 and stamina = 100 and every fighter can fight.  When he fights his 
stamina decreases by 1 and the following message is printed on the console: `${fighter's name} slashes at the foe!`
	• Mages also have state (name, health = 100 and mana = 100). Every mage can cast spells. When a spell is 
casted the mage's mana decreases by 1 and the following message is printed on the console:
`${mage's name} cast ${spell}`





