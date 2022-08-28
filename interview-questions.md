# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is a paradigm in Ruby language where everything is an object and it has a key:value pair. However, I am not not sure how it is different from functional programming. 

Researched answer: Object-oriented programming (OOP) is programing paradigm that was created to keep up the complex and intricate applications that were being built. Developers wanted to find a way to store data that could be easily changed and/or manipulated. They also wanted to figure out a way to ensure they could alter the data without affecting the entire program. OOP is different from functional programming  because ruby was built on the idea that "everything is an object".  If we think of data in this way, we can store data and behvaior within a key:value pair and a developer could use a method to manipulate the information it holds. 

I've used Ruby in the past and I have experience with OOP. I've used Ruby before to access data within a key that values of in an array. With OOP, I was able to call upon the value and manipulate it without actually changing the value of the key:value pair. This allows me to alter data in one section of my code, without worry that I have changed something else that was calling on the same key:value. 


2. What is the difference between a Float and an Integer in Ruby?

Your answer: An integer is represented by a whole number like 1,2,3,4. With integers, you are able to do mathmatical functions like addition, subtraction, multiplication, division, and modulo just to name a few. When you are using integers in mathmatical equations, the output will also be a whole number. 

The difference of a float is used to return a not a whole number. A float can be represented like, 1.0, 2.0, 3.2, 4.5. By using a float and using it in mathmatical equations, it will allow you to have a return of the exact non-whole number. For example, if you wanted to take 4.0 / 3, your output would be 1.3333. 

Researched answer: I have used both integers and floats in my daily Ruby coding before. A time where I would choose to use integers is when I would like to find a remainder. For example, if I wanted to find the remainder of 3 divided by two. I would use the modulo operator represented by % and use it with the integers of 3 and 2 to write out as 3 % 2 which would output 1. By using integers, I know that the number I will receive as an output would also be a whole number. However, if I were to use a float, and do 3.0 % 2.0, I would actually receive the number 1.0 which would not produce the same output I would need for my method. 

3. Ruby has an implicit return. What does that mean?

Your answer: Implicit return is associated with a block where you do not need to use any return cod3 to receive an output within your terminal. 

Researched answer: Implicit return lives in every block of Ruby, where the return is automatic and you do not need to type return within your block. Implicit returns is something I am very fimilar with since I work with it all the time when creating blocks in Ruby. It is important to remember that implicit returns will also return the last expression because the computer will go through and execute the block from top to bottom. Lastly, it is good practice to make sure that "return" is not within the block because it may cause issues for your output. 

4. What is a block in Ruby?

Your answer: A block is an anonymous function that is defined by def/end. Def is used to define the method and it is needed to also give the block a name. End is used to wrap and enclose the code execution within the block that you have created. Anything made within the block has a local scope which means you are not able to access the code outside the block anywhere else in your code. 

Researched answer: A block is an anonymous function that is defined by do/end. do allows you to tell the computer to do something to the argument you are passing. You then use end to enclose the code block to let the computer know that the block code has ended. A block will take an argument and return a value back to you. I've used blocks before when I want to receive values. An example of using a block is when I wanted to retrieve all values that were in an array. By using .each(a method that iterates over each value in an array)using a block of do/end and passing it the array of my choice, I was able to receive an output of all the values in the array. 

5. What is an instance variable in Ruby?

Your answer: I am not sure of what an instance variable is. To ensure I could understand the concept, I would definitely look into my resources that I have from my bootcamp Learn, but also review the term using online sources. 

Researched answer: An instance variable is what belongs to a class' instance. By using an instance variable, it allows you to create a new instance, which you can think of it as a new space, for you to store data. An instance variable's syntax uses the @ to define that it is an instance and then it is followed by the instance's name. Instance variables come in handy when you want to store data within a class that you have created. It is important to know that you need to use an instance variable if you want to hold information. If you were to pass data/information to a class without storing it first, it will not have anywhere to go. For example, if I wanted to create a new instance of my class to hold information about food in the fridge, I would first need to use an instance variable to create an empty "space" for it to hold information. Once I have created my instance of food in the fridge, I can then assign it to hold the information I need. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL: PostgreSQL is a free, open-sourced management system which allows developers to store information/data for any web applications.

2. Ruby on Rails: Ruby on Rails is a framework that goes hand in hand with the Ruby scripting language and used to create full stack applications. 

3. ORM:ORM stands for Object-relational mapping which takes in incompatible data and converts to be able to be compared to each other.

4. Active Record: Active Record is an Object-relational mapping (ORM) that allows you to manipulate data from table databases by using the Ruby language  

5. Migrations: Migrations is a tool needed to setup a database and alter/make changes over time. 
