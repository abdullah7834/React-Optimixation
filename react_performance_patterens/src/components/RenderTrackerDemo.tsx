"use no memo"
import  { useCallback, useState } from 'react'
import RenderTracker from './RenderTracker'
import ProfileCard from './ProfileCard'
// import Chlid from './Chlid'
import Parent from './Parent'

const RenderTrackerDemo = () => {
    const [value ,  setValue] = useState("")
    const [count , setCount] = useState(0)


    // const handleClick = useCallback(() => {
    //        console.log ("Child Click")
    // } , [])
  return (
    <>
    <RenderTracker />
     <input type="text"  
     value={value}
     onChange={(e) =>setValue(e.target.value)}
     />
     <p>Count : {count}</p>
     <button onClick={()=> setCount(count+1)}>Increment</button>
     <ProfileCard  name= "Abdullah" />
     {/* <Chlid onClick={handleClick} />  */}
     <Parent />
    </>
  )
}

export default RenderTrackerDemo