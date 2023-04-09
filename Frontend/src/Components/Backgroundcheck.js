import React from 'react'
import Navbar from './Navbar'
import Cookies from 'js-cookie'

// function Example(props) {
//   return (
//     <div>
//       {/* <hr style={{ border: "2px solid #ddd" }} /> */}
//       <div style={{ marginTop: 50}}>
//         <div style={{  paddingRight: 30 }}>{props.children}</div>
//         <div >
//           <h2 className="background">Safe</h2>
//           {/* <p>{props.description} </p> */}
//         </div>
//       </div>
//     </div>
//   );
// }



const Backgroundcheck = () => {

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    window.location.href = "/login";
  }

  return (
    
    <div>
      <Navbar></Navbar>
      <h2 className='bglabel'>Background Check</h2>

      <div className='rate'>
        <h2>Employee Feedback</h2>
      <p>Was the employee involved in any disputes with other employee(s)?</p>
      
        </div>
    
    <div class="ui-widgets">
            <div class="ui-values">85%</div>
            <div class="ui-labels">Safe</div>
        </div>
    </div>
  )
}

export default Backgroundcheck