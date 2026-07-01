Problem : For Example we have to render the hundered of thousands of the Users on the Screen and then  when We scroll the UI become Sluggish 
Solution : Virtualization is a technoique in which just load the things that are on the screen only ,so when we done Virtual Scroll or the pagination , then the virtualization is the thing we have to keep in mind , why we bring the unecessary things on the browser , load the browser memory that is not visible to the user 
This is a performance Optimization Technique through which you renders only what's visible on the screen 


Here we use the Library Named as the react-window and that helps us in getting the Virtualization in react where I we use the List 
So when ever we have to display the long list of the data so we also go for a virtualization 



Next Technique is about the concurrent rendering using transitions :    the react 18 introduces the  concurrency in react to keep the UI responsive 
The Problem we usually face and that is when you type in the search box that filters among thousands or 10000 of the elements your UI frezes and the keystrokes lags , 
Thats where the React came with a Hook named as the useTransition 


The useTransitions gave us the two things , One is the Function called the  startTransition and the state called  isPending 
The function setTransitions tells react that this particular update is not urgent , Keeps the UI responsive while you are doing everything that is defined inside this function , for example , when I am searching something from the list and we donot wants the user experience that it feels lag here , Like there are two Operations are happening the typing and the Filtering , but the  React have to prioritize the typing so that it never becomes laggy in it ,

After the useTransition  have done its works then turns the isPending State is False in it 


The usetransition function marked the heavy updates as the non-urgent 



The useDeffered Value is one more hook provided by the react to optimize the Performance of the react , by marking the certain updates as the low priority , 
The Main different thing between the useTransition and the useDefferedValue hook is the 
useTransition hooks controls the state update function and whatever we write in the useTransition is the  Deffered Value  it is the low priority item 
and in the useDefferedValue we control the value which is the result from the state update 



Keys are very important in the react , we have used idx as the key which is bad Practice , Adding and removing the items shift the indexes and  react thinks entries have change and then It breaks the memoization and causes unecessary DOM recreation  , instead use the id from the your database which is unique



Dev Tools to explore : React Developr Tools : 
React performance Tracks
React Scan : Which is helpful in terms to notice that which React Application Tool is unecessarily re-rendering 