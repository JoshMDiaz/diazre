import React from 'react'
import carImg from '../../images/car.svg'
import houseImg from '../../images/house.svg'

const Pricing = () => {
  return (
    <div className="pricing padding max-width">
      <h2>Pricing</h2>
      <p className="description">The pricing for interior VR Tours are based on the square footage of the house and the distance travelled to the property. Exterior VR Tours available upon request - price will vary based on the acreage of the are needing to be covered.</p>
      <ul>
        <li>
          <img src={houseImg} alt="house"/>
          <span>$0.10 / sq ft</span>
          </li>
        <li>
          <img src={carImg} alt="car"/>
          <span>$0.15 / mile</span>
          </li>
      </ul>
    </div>
  );
}
 
export default Pricing;