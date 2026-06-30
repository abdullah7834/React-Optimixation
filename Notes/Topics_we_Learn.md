Techniques we will Learn for the react Optimization is 
Memoization 
Derived State
Debounce/throttle
Spilliting Components
Virtualization
Conext Optimization
React Compiler

The main difference between the useState and the useRef is that the Change in the state force the application to re-renders , but in the useRef the  value keeps persist on every-rerendering and the change in the value  of the ref does not force the re-renders of the 

Memoization  : This a technique which speed up your Program  by storing the results of a function executions , and then use the stored or the cached results , if the input to the functions does not change 
Let F(x) = y  , here the function f has the input value X and it gave the result Y and everytime this function executes it gave the same result y  the cached result , unless the value of the  input (X) changes , so this technique in which we are caching the results are called memoization 
Where we cache the output value of a function and return the same output as long as the  inpput  remains same , 

In React  there are three  different ways of the memoization , 
1 : A function called memo()
2 : useCallback() the react Hook
3:  useMemo   this a also a hook 



1 : memo() : The memo is the higher order function , which takes the component as an argument and return the memoized , like it avoids the unecessary re-rendering of the components :  If the Parent comoponent re-renders  If we put the memo in the child and pass the  static value it never gonna be re-renders again unless the input changes ,  But in case of the functions the  memo will not works , because here the js cames into it , so on each renders the new reference of the function is created and If we pass the  function as a prop in the child component and then the Parent component re-renders the child also gonna be re-render even if it use the  React Memo  , 
Inline arrow functions breaks the memoizations because on each re-renders it  creates a  new reference to a function or a new identity , To Fix this there comes to the other  react hook named as the useCallback() , which helps us to stablize the references to a function , with useCallback it ensures that the React.memo always sees the same Object 
useCallback use the dependency array in which only cause the renders when the things passed in that dependency array got changes  , and if the dependencies are not gonna change useCallback ensures the function that uses the React.memo to do not re-renders the component unless these values gonna be change in them 
Now the functions using the useCallback are not recreated again and again on every re-render because the it is  Optimized now using the useCallback
useCallback Caches the reference until the dependencies changes 


3 : useMemo : useMemo helps you to cache the computed heavy values until the dependencies changes , Imagine the useMemo it memoize the return value of the function and it memoize cache this and always returns the same values as when the input remains same as the input changes it is going to return you the changed value and then memoize this or cache this newly returned value  , 
If the Component have the useMemo() , that computation is not happening everytime the App re-render , unless the input or the dependency does not changes in it 
Do not use the useMemo() for the smaller computations : like the values 5000 , 10000 we do not needs to use the useMemo hook 