import React from 'react'
import "./Success.css"
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div className='main'>
<div className="d-flex flex-column justify-content-center w-100 h-100">

<div className="d-flex flex-column justify-content-center align-items-center">
    
<img src="./images/icons8-approval.gif" alt=""  className='success'/>
    
<h1 className="new fw-light text-white m-0">Succesfully Purchased!</h1>
</div>
<div className="hm"><Link to="/"><button className="hmb">Home</button></Link></div>
</div>
</div>
    
  )
}

export default Success



// ----------------------------------------