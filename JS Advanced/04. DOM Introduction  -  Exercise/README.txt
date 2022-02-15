01. Subtraction
An HTML page holds two text fields with ids "firstNumber" and "secondNumber". Write a function to subtract the 
values from these text fields and display the result in the div named "result".
Implement the above to provide the following functionality: 
	• Your function should take the values of "firstNumber" and "secondNumber", convert them to numbers, 
	subtract the second number from the first one and then append the result to the <div> with id="result".
	• Your function should be able to work with any 2 numbers in the inputs, not only the ones given in the 
	example.

02. Pascal or Camel Case
An html file is given and your task is to write a function that takes two string parameters as an input and 
transform the first parameter to the type required by the second parameter.
	• The first parameter will be the text that you need to modify depending on the second parameter. The 
	words in it will always be separated by space.
	• The second parameter will be either "Camel Case" or "Pascal Case". In case of a different input, you 
	your output should be "Error!"
When the button is clicked the function should convert the first string to either of the cases. The output 
should consist of only one word - the string you have modified. Once your output is done, you should set it as 
a HTML to the <span> element. 

03. Accordion
An html file is given and your task is to show more/less information by clicking the [More] button , it should 
reveal the content of a hidden div and changes the text of the button to [Less]. When the same link is clicked 
again (now reading Less), hide the div and change the text of the link to More. Link action should be 
toggleable (you should be able to click the button infinite amount of times).

04. Search in List
An HTML page holds a list of towns, a search box and a [Search] button. Implement the search function to bold 
and underline the items from the list which include the text from the search box. Also print the amount of 
items the current search matches in the format "<matches> matches found".

05.Table - Search Engine
Write a function that searches in a table by given input.
When the "Search" button is clicked, go through all cells in the table except for the first row (Student name, 
Student email and Student course) and check if the given input has a match (check for both full words and 
single letters).
If any of the rows contain the submitted string, add a select class to that row. Note that more than one row 
may contain the given string. 
Оtherwise, if there is no match, nothing should happen.

06. Format the Text
Create functionality that gets text from textarea, formats the given text - you need to find out how many 
sentences there are in the text, simply split the whole text by '.' 
Also, every sentence must have at least 1 character.
When the [Format] button is clicked, get the text inside the textarea with an id="input" and format it. The 
formatting is done as follows:
	• Create a new paragraph element which holds no more than 3 sentences from the given input.
	• Hint: Use interpolation string to create paragraph element. (`<p> {text} </p>`)
	• If the given input contains less or 3 sentences, you need to create only 1 paragraph, fill it with 
these sentences and append this paragraph to the div with an id="output". 
Otherwise, when you have more than 3 sentences, create enough paragraphs to get all sentences from the 
textarea. Just remember to restrict the sentences in each paragraph to 3.

07. Hell's Kitchen
You will be given an array of strings, which represents a list of all the restaurants with their workers.
When the Send button is clicked:
	• display the best restaurant of all the added restaurants with its average salary and best salary. 
	• If there is a restaurant in the input array which is added more than once you should update (add the
new ones) the workers, average salary and best salary.
	• The best restaurant is the restaurant with the highest average salary. If two restaurants have the 
same average salary the best restaurant is the first one added.
	• display all workers in the best restaurant with their salaries.
The best restaurant's workers should be sorted by their salaries by descending order.

08. Generate Report
You be given a web page, containing a table and output area. 
When the “Generate Report” button is pressed:
	• You must generate a JSON report from the data inside the table, by only taking the columns, which are
selected.
Each table header has a checkbox. If the checkbox is checked, then the data from this column must be included 
in the report. Unchecked columns must be omitted. 
For every row (excluding the header:
	• Create an object with properties for each of its columns;
	• The name of each property is the name attribute of the column’s header, and the value is the text 
content of the cell;
	• Store the result in an array and output it as a JSON string display it inside the <textarea> with 
id “output”. See the example for details.

09. Number Convertor
Write a function that converts a decimal number to binary and hexadecimal.
The given number will always be in decimal format. The "From" select menu will only have a Decimal option, but
the "To" select menu will have two options: Binary and Hexadeicmal. 
This means that our program should have the functionality to convert decimal to binary and decimal to 
hexadecimal.
Note that "To" select menu by default is empty. You have to insert the two options ('Binary' and 'Hexadecimal')
inside before continue. Also they should have values ('binary' and 'hexadecimal').
	• When the [Convert it] button is clicked, the expected result should appear in the [Result] input 
field.






