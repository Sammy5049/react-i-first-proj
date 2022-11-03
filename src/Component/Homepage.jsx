import React from "react";
import slack from '../Images/slack.png'
import Socialicon from '../Images/Socialicon.png'
import sharedesktop from '../Images/sharedesktop.png'
import sharemobile from '../Images/sharemobile.png'
import './Homepage.css'
import  {Container} from 'react-bootstrap'
import { useState } from "react";
import { useEffect } from "react";

const Homepage = () => {
 const [details, setDetails] = useState(false)
  const [python, setPython] = useState(false)
    const [pitch, setPitch] = useState(false)
    const [freeBooks, setFreeBooks] = useState(false)
     const [showProfile, setShowProfile] = useState(false)


     


    
    



  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop:'80px'
        
      }}
      className='Container home-container'
    >

  
     <div onMouseEnter={() => setShowProfile(!showProfile)} onMouseLeave={() => setShowProfile(!showProfile)} className="sharecontainer">
      <img className="sharedesktop" style={{ borderRadius:'275px', margin:'0 auto'}}   src={sharedesktop} alt="ao4" />
      <img  className="sharemobile" style={{ borderRadius:'275px', margin:'0 auto'}}   src={sharemobile} alt="ao4" />
       {showProfile && <p
          style={{position:'absolute', top:'10%', right:'120%', zIndex:'99', width:'100px',  fontSize:'12px', fontFamily:'roboto',  backgroundColor:'black', color:'white', padding:'10px', borderRadius:'10px'}}
          >Share  link</p>}
     </div>

 

    
      <div style={{      display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",}}>

         <div id="profile_img" className="averterimage"  >
       

         </div>

      

    


       <h1 id="twitter"
       style={{display:'block', fontSize:'20px', fontFamily:'roboto', color:'#101828', lineHeight:'30px', textAlign:'center', fontWeight:700, fontStyle:'normal'}}
       >Dammyadeola1</h1>
      </div>

         <h1 id="slack"
       style={{display:'none', fontSize:'20px', fontFamily:'roboto', color:'#101828', lineHeight:'30px', textAlign:'center', fontWeight:700, fontStyle:'normal'}}
       >Damilola Samuel Adeola</h1>
      <br />
      <br />

{/* 

      <div className="col-12"  style={{ backgroundColor:"#EAECF0",  display:'flex', flexDirection:'row', justifyContent:'center', padding:'24px 32px', height:'76px', width:'100%',border:'1px solid #EAECF0', borderRadius:'8px', boxSizing:'border-box', alignItems:'center'}} >
      <p>
       <a  style={{ fontSize:'18px',  textDecoration:'none', fontFamily:'paraquin', color:'#101828', lineHeight:'28px', textAlign:'center', fontWeight:500, fontStyle:'normal'}} href="#">Twitter Link</a>
      </p>

      </div>
 */}


      <div className="links">
       <h1 style={{ fontSize:'18px', textDecoration:'none', fontFamily:'roboto', color:'#101828', lineHeight:'28px', textAlign:'center', fontWeight:500, fontStyle:'normal'}}>
       Twitter Link
      </h1>
      </div>
      <br />

  
      <br />

         <div className="links2">
          <a style={{  textDecoration:'none', }} target='_blank' href="https://training.zuri.team">

          <button id="btn_zuri" style={{ padding:'24px',  fontSize:'18px', fontFamily:'roboto', color:'#101828', lineHeight:'28px', textAlign:'center', fontWeight:500, fontStyle:'normal', }} >
        
            Zuri Team
           
          </button>
          </a>
   
      </div>
      <br />


        <div onMouseEnter={() => setDetails(!details)} onMouseLeave={() => setDetails(!details)}  style={{ position:'relative'}} className="links2">
          <a style={{  textDecoration:'none', }} target='_blank' href="https://books.zuri.team">

          <button  id="books" style={{ padding:'24px',  fontSize:'18px', fontFamily:'roboto', color:'#101828', lineHeight:'28px', textAlign:'center', fontWeight:500, fontStyle:'normal'}}>
        
          Zuri Books
           
          </button>
          </a>
          {details && <p
          style={{position:'absolute', top:'70%', left:0, right:0, zIndex:'99', fontSize:'12px', maxWidth:'600px', margin:'0 auto',fontFamily:'roboto',  backgroundColor:'black', color:'whitesmoke', padding:'10px', borderRadius:'10px'}}
          > Handpicked books where you find books about design and coding offered by zuri and customized guides to help you grow and advance your tech careers.</p>}

   
      </div>
      <br />


        <div onMouseEnter={() => setPython(!python)} onMouseLeave={() => setPython(!python)}   style={{ position:'relative'}} className="links2">
          <a  style={{  textDecoration:'none', }} target='_blank' href="https://books.zuri.team/python-for-beginners?dammy5049">

          <button id="book_python"  style={{ padding:'24px',  fontSize:'18px', fontFamily:'roboto', color:'#101828', lineHeight:'28px', textAlign:'center', fontWeight:500, fontStyle:'normal', }} >
        
         Python Books
           
          </button>
          </a>
           {python && <p
          style={{position:'absolute', top:'70%', left:0, right:0, zIndex:'99', fontSize:'12px', maxWidth:'600px', margin:'0 auto', fontFamily:'roboto',  backgroundColor:'black', color:'whitesmoke', padding:'10px', borderRadius:'10px'}}
          >This Book gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified.</p>}

   
      </div>
      <br />


        <div onMouseEnter={() => setPitch(!pitch)} onMouseLeave={() => setPitch(!pitch)} style={{ position:'relative'}} className="links2">
          <a style={{  textDecoration:'none', }} target='_blank' href="https://background.zuri.team">

          <button id="pitch" style={{ padding:'24px',  fontSize:'18px', fontFamily:'roboto', color:'#101828', lineHeight:'28px', textAlign:'center', fontWeight:500, fontStyle:'normal', }} >
        
           Background Check for Coders
           
          </button>
          </a>
          
           {pitch && <p
          style={{position:'absolute', top:'70%',left:0, right:0, zIndex:'99', fontSize:'12px', maxWidth:'600px', margin:'0 auto',fontFamily:'roboto',  backgroundColor:'black', color:'whitesmoke', padding:'10px', borderRadius:'10px'}}
          >We pitch service for running background checks on coders, you get accurate and reliable information from us</p>}
   
      </div>
      <br />


        <div onMouseEnter={() => setFreeBooks(!freeBooks)} onMouseLeave={() => setFreeBooks(!freeBooks)} style={{ position:'relative'}} className="links2">
          <a   style={{  textDecoration:'none', }} target='_blank' href="https://books.zuri.team/design-rules">

          <button id="book_design" style={{ padding:'24px',  fontSize:'18px', fontFamily:'roboto', color:'#101828', lineHeight:'28px', textAlign:'center', fontWeight:500, fontStyle:'normal', }} >
        
            Design Books
           
          </button>
          </a>
           {freeBooks && <p
          style={{position:'absolute', top:'70%',left:0, right:0, zIndex:'99', fontSize:'12px', maxWidth:'600px', margin:'0 auto', fontFamily:'roboto',  backgroundColor:'black', color:'whitesmoke', padding:'10px', borderRadius:'10px'}}
          > You get free design books here.</p>}
   
   
      </div>
      <br />
      <br />
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
       <img style={{marginRight:'15px'}} src={slack} alt="slack" />
        <img style={{marginLeft:'15px'}} src={Socialicon} alt="Socialicon" />
      </div>
      <br />
      <br />
      <br />

    </Container>
  );
};

export default Homepage;
