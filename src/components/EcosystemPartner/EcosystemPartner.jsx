import React from 'react'
import Sit_img from '../../assets/images/Sit_partner.jpg';
import '../EcosystemPartner/EcosystemPartner.css';

function EcosystemP() {
  return (
    <div className='eco-header'>
      <div className='eco-heading'>
      <p>Ecosystem Partner</p>
      </div>

      <div className='eco-logo'>
        <img src={Sit_img} alt="Sit logo"/>
      </div>
      
      
    </div>

  )
}

export default EcosystemP