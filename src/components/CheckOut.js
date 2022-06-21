import React from 'react'


const CheckOut = () => {
  return (
  <>
<marquee scrolldirection="left">Your text here</marquee>

<ul class="stepper" data-mdb-stepper="stepper">
  <li class="stepper-step stepper-active">
    <div class="stepper-head">
      <span class="stepper-head-icon"> 1 </span>
      <span class="stepper-head-text"> step1 </span>
    </div>
    <div class="stepper-content">
 
    </div>
  </li>
  <li class="stepper-step">
    <div class="stepper-head">
      <span class="stepper-head-icon"> 2 </span>
      <span class="stepper-head-text"> step2 </span>
    </div>
    <div class="stepper-content">
   
    </div>
  </li>
  <li class="stepper-step">
    <div class="stepper-head">
      <span class="stepper-head-icon"> 3 </span>
      <span class="stepper-head-text"> step3 </span>
    </div>
    <div class="stepper-content">
   
    </div>
  </li>
</ul>
  </>
  )
}

export default CheckOut