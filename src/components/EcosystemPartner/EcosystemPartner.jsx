import React, {useEffect, useState} from 'react'
import Sit_img from '../../assets/images/LogoMGM.svg';
import '../EcosystemPartner/EcosystemPartner.css';

function EcosystemP() {

    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('https://api.konfhub.com/event/public/iwd24smbj/sponsors')
            .then(response => response.json())
            .then(data => setPartners(data.uncategorized));
    }, []);

  return (
      <div className='eco-header' >
          <div className='eco-heading'>
              <p>Ecosystem Partner</p>
          </div>


          <div className='eco-logo'>
              <img src={Sit_img} alt="Sit logo"/>
          </div>

          <div className='eco-heading'>
              <p>Community Partners</p>
          </div>
            <div className='eco-div'>
                {partners.map((partner, index) => (
                    <div key={index} >
                        <div className='eco-logo'>
                            <img src={partner.sponsor_image_url} alt={partner.sponsor_name} />
                        </div>
                    </div>
                ))}

            </div>
        </div>
  )
}

export default EcosystemP
