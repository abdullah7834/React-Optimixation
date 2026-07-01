As we now the React re-renders children automatically   when the parents re-renders , but with the proper Isolation we can prevent this by using the  Component Isolation



Context Optimization :  React context is  the most Powerfull but cause the massive re-renders , because it forms a chain like we create a context to a provider and provide a value , and wherever you wants to provide the context in the components hierarchy , you just use them in the hierarchy , and if something somewhere change and the whole component hierarchy changes , from which the provider wrapped , 
SO the good Practice will be splitting the context , 

Before and After :

<UserContext.Provider Provider value = {{user , theme }}>
<App/>
</UserContext.Provider>


After :

<UserProvider  value= {{user}}>
<ThemeProvider value = {{theme}}>
<App/>
</UserProvider>
</ThemeProvider>


But we have to make sure that whether the UserProvider and the Theme Provider has needs to be wrapped the entire application or we just needs this only some parts of the application , we needs to be mindful 
Context is something that can leak lot of Performance issues in the entire Application