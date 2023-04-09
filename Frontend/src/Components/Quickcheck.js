import React from 'react'
import Navbar from './Navbar'
import Cookies from 'js-cookie';

function Quickcheck() {

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    window.location.href = "/login";
  }

  return (
    <div>
    <Navbar/>
    <h2 className='bglabel'>Quick Check</h2>
  <div class="rate">
    
    <h3>Employer Feedback</h3>
  <input type="radio" id="star5" name="rate" value="5" />
  <label for="star5" title="text">5 stars</label>
  <input type="radio" id="star4" name="rate" value="4" />
  <label for="star4" title="text">4 stars</label>
  <input type="radio" id="star3" name="rate" value="3" />
  <label for="star3" title="text">3 stars</label>
  <input type="radio" id="star2" name="rate" value="2" />
  <label for="star2" title="text">2 stars</label>
  <input type="radio" id="star1" name="rate" value="1" />
  <label for="star1" title="text">1 star</label>
        </div>
  <div class="ui-widgets">
          <div class="ui-values">85%</div>
          <div class="ui-labels">Safe</div>
      </div>
      
  </div>

  )
}

export default Quickcheck