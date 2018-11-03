import React from 'react'

const goToPricing = () => {
  console.log('pricing');
}

const Banner = () => {
  return (
    <div className="banner padding max-width">
      <button onClick={goToPricing}>Pricing</button>
    </div>
  );
}
 
export default Banner;