// import React, { useEffect, useState } from 'react';
// import '../SpeakerCard/SpeakerCard.css';
// import '../EcosystemPartner/EcosystemPartner.css';
//
// function SpeakerCard() {
//     const [speakers, setSpeakers] = useState([]);
//
//     useEffect(() => {
//         fetch('https://api.konfhub.com/event/public/iwd24smbj/speakers')
//             .then(response => response.json())
//             .then(data => setSpeakers(data));
//     }, []);
//
//     return (
//         <div>
//             {speakers.map((speaker, index) => (
//
//                 <div className='eco-div '>
//                 <div key={index} className='eco-header'>
//                     <img src={speaker.image_url} alt={speaker.name} />
//                     <h2>{speaker.name}</h2>
//                     <p>{speaker.designation}, {speaker.organisation}</p>
//                     <a href={speaker.twitter_url}>Twitter</a>
//                     <a href={speaker.linkedin_url}>LinkedIn</a>
//                 </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
//
// export default SpeakerCard;
