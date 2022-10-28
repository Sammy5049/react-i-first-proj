import React from 'react'
import I4G from '../Images/I4G.png';
import ZuriInternshipLogo from '../Images/ZuriInternshipLogo.png';
import './Footer.css'


const Footer = () => {
  return (
 
       <div style={{  width:'100%' , display:'flex', justifyContent:'center', alignItems:'center', marginTop:'80px', marginBottom:'30px' }} className='container-fluid foot-section' >
        <div style={{ width:'100%' ,  display:'flex', justifyContent:'space-between' }} className="foot-container">
         <div style={{marginBottom:'30px'}} > <img src={ZuriInternshipLogo} alt="ZuriInternshipLogo" /></div>
          <div>  <p
        style={{ fontSize:'16px', fontFamily:'paraquin', marginBottom:'30px' , color:'#667085', lineHeight:'24px',  fontWeight:400, fontStyle:'normal', }}
        >HNG Internship 9 Frontend Task</p></div>
           <div> <img src={I4G} alt="l4g" /></div>
        </div>


      
      
     
    </div>
  )
}

export default Footer