React Compiler 
React 19 introduces the React 19 which automatically memoize the components , stablizes the functions and references and prevent unecessary re-rendering without requiring any manual effort from the Developer in writing useMemo and useCallback etc  , so by this we really do not needs to write the react.memo , usememo and usecallback manually , it reduce lots of code and also the  dozens of accidental performance issues , now when we use the usememo and all this kind of stuff and we actually overuse this , Now in the  react v19 the react claims that by using the React Compiler we do not needs to write these things manually :



By using the React Compiler 
-Component Outputs get memoized 
-Functions get stablized Behind the scenes
-Write less code and react optimizes more

Old way 
 const total = useMemo(()= amount *2 , [amount])

New Way using React Compiler
const total = amount * 2 ;


Ok we just have to install one dependency and then configure the viteconfig.ts , to make it works the react compiler on a whole application 
And now If for some reason we wants to opted the component out  of this over all memoization using react compiler then we will , use this on that component 
"use no memo" and that is it :  But it is recomended to use for the all over application .



