Lazy Loading allows you to load only what it is needed and when it is needed , It improves time to interactive , that means reduce bundel size

1 : Time to Interactive
2 : Reduce the Bundle Sizes
3 : Perceived Performance

Ok so it means we just wants to show the only that component that is needed first , we can show this using the useState but we it still slows down beacause it first downloads the whole content from the server on the browser and then show , which makes it slow ,
Lazy loading , here we selectively loads the heavy component and render this and show this heavy component , that reduces a lots of the rendering time when it is first time loading or rendering , now It can add the user experience also by this

here we

Suspense : come with a call back and it expects the certain things to be rendered Asynchronously , Like here the component which needs to be loaded lazily should not be imported as general , it is imported dynamically and to render that component we need something called a suspense and along with the fall back saying till the point the content of this got downloaded fully get baked and rendered on your browser show something , like loading etc below is a code for the better understanding
const Heavy = React.lazy(()=> import(./Component Name))
<Suspense
fallback = { div style= {{padding : 20 }}}>Lazy Loading Heavy component  
 {show && <Heavy />}

    </Suspense>


React will start Importing this heavy comoponent , downloading the content of this on the browser , baking it and rendering it , till that the  Suspense Will show this particular div saying  Lazy Loading Heavy Component 
