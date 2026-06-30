import React, { useRef } from 'react'

const RenderTracker = () => {
    const renders = useRef(0);
    renders.current ++;
  return (
    <>
<p>Rendered : {renders.current} times</p>
    </>
  )
}

export default RenderTracker