01. Sections
You will receive an array of strings. For each string, create a div with a paragraph with the string in it. 
Each paragraph is initially hidden (display:none). Add a click event listener to each div that displays the 
hidden paragraph. Finally, you should append all divs to the element with an id "content".

02. Time Converter
Create a program that converts different time units. Your task is to add a click event listener to all 
[CONVERT] buttons. When a button is clicked, read the corresponding input field, convert the value to the three
other time units and display it in the input fields.

03. Locked Profile
In this problem, you should create a JS functonality which shows and hides the additional information about 
users. When one of the [Show more] buttons is clicked, the hiden information inside the div should be shown, 
only if the profile is not locked! If the current profile is locked, nothing should happen. If the hidden 
information is displayed and we lock the profile again, the [Hide it] button should not be working! Otherwise, 
when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.

04. Fill Dropdown
Your task is to take values from input fields with ids "newItemText" and "newItemValue". Then you should 
create and append an <option> to the <select> with id "menu".

05. Encode and Decode Messages
In this problem, you should create a JS functonality which encodes and decodes some messages which travel to 
the network. This program should contain two functionalities. The first one is to encode the given message and 
send it to the receiver. The second one is to decode the received message and read it (display it).
When the [Encode and send it] button is clicked, you should get the given message from the first textarea. When you get the current message, you should encode it as follows:
• Change the ASCII CODE on every single character in that message when you add 1 to the current ASCII NUMBER, 
that represent the current character in that message
• Clear the sender textarea and append the encoded message to the receiver textarea
After that, when the [Decode and read it] button is clicked. You need to get the encoded message from the 
receiver textarea and do the opposite logic from encoding:
• Subtract 1 from the current ASCII NUMBER, that represents the current character in that message
• Replace the encoded message with the already decoded message in the receiver textrea, to make it readable





