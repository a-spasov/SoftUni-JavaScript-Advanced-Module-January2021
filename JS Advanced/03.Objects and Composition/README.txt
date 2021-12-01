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

