# Lab 5 - Starter
Pablo Wells (no partners)
Website: https://pablowells.github.io/Lab5_Starter/expose.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- I would avoid using a unit test to test the "message" feature of a messaging app. This is because sending a message, especially between users, involves multiple componenets of a program working together. This structure does not lend itself to being tested via unit tests as unit tests excel in testing small isolated components. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- I would use a unit test to test the "max message length" feature of a messaging app. Unit test excel is testing small, isolated pieces of code. A unit test could be easily added by just adding an if statement to test the length of the message string. This does not interact with other components of the messaging app. 

Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
