Debouncing and Throttling

Problem : In the search bar when we type something and on every key stroke it made an API call  which makes the Application slow 
These API  calls are not cheaper they are expensive , because we have to make them over the network and some API calls have the rate Limits 
So we Should have some mechanism where we can control this , this is where the debounce comes into the picture 


Debouncing : The debouncing is a technique by which we can delay the execution of a function by certain time  ,
Event will be trigger there , but there is some function call we can control this , that function call will not happened for a specified period of time that you decide what is the specified time this is called the Deboncing
So Debouncing said , I am gaving you an update value back only after a particular delay , like for example I said to call it right after 600ms after I stoped typing in the search bar this is what debouncing is , 
Without this technique we use to call the mutliple API calls at a time , now we only made one API call 
We can defer the particular function execution or the value generation for a certain period of time we can delay it ,
Debouncing is a delaying of an execution of a  function 



Throttling : There is something DOM Manipulation which is much heavier this is not a good thing 
In this throtlling , We say that within a  specified span of time , I wants certains things to happened at most once , again when time span is over again we make it happened 
For a throttiling on a particular duration a operation is going to take place , but it is going to take place at most once , 
