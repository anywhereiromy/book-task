An exercise in Test Driven Development. 

In industry software is usually developed in small chunks of work called tickets. 

Tickets usually contain a user story like below:

As a user, 
I want to be able to retrieve names of books based on genre
So that I can visualise my options

We want to write some tests for a new function. The tests should check the function achieves the following goals:

Function returns an array
Function returns an empty array if there are no books of that genre
Function returns correct books based on genre

Notes: 

We should write our tests first! 
We should always check our tests fail when we expect them to, BEFORE we make them pass.
