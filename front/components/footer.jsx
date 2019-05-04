import React from 'react';
import { generateKeyPair } from 'crypto';

const SocialButtonsPage = () => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns:'1fr 1fr 1fr',
      padding:'20px',
      borderTop:'1px solid #FF5A5F',
      marginTop:'30px'
    }}>
      <a target='_blank' href="https://www.facebook.com/chicasentecnologia/" style={{textAlign:'center'}}><img src="/facebook.png" style={{
      width:'12%'
      }}/></a>
      <a target='_blank' href="https://www.instagram.com/chicasentec/?hl=es/" style={{textAlign:'center'}}><img src="/instagram.png" style={{
      width:'12%'
      }}/></a>
      <a target='_blank' href="https://twitter.com/chicasentec?lang=es" style={{textAlign:'center'}}><img src="/twiter.png" style={{
      width:'17%'
      }}/></a>
    </div> 
  );
}

export default SocialButtonsPage;