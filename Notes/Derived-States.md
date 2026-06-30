Derived State is any Value that is computed from the exsisting state or the Props
Example , You have a list and we can derive the filter list from there 
You have a cart Items , You can derive the total amount of that cart item
You have a text , you can derive the length of the string 

Derived State should not be stored in another react state ,  because storing it cause the unecessary re-renders which cause many problems in terms of the performance of my react Application

If you are storing the derived state into the react state you have to synchronize between the original state vs the derived state , What if you original state become stale and your derived state state is out of sync , we have to put lot of complex logic on the synchronization and we are doubling down the re-rendering  whenever certain updates happened 


Ok the concept is this that is , whenever  we pass the state as a props to a child component and then we then we again make a state to handle  this  state values , in this  state which is being received by the parents are derived state and the state which is being used within that child component that  uses to handle this one ,  we avoid this kind of the code because it causes the complexity and double the re-rendering in it :



