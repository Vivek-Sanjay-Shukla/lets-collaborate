import React, { useEffect } from 'react'
import "./Card.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = (props) => {

  useEffect(() => {
    AOS.init({
      once: true,
     });
  }, []);

  return ( 
    <div className='card-section'  data-aos="fade-up-once"  data-aos-duration='900'>
       
       <div className='left'>
           <div className='left-container'>

              <h1>{props.title}</h1> 

              <div className='image'>
                <img src={props.image} alt={props.imgName}/>
             </div>

               <div className='info'>
               <h3>{props.description}</h3>
               </div>

               <a href={props.Link} className='link-section' >
                   <p>{props.LinkName}</p>
                   <p>→</p>
               </a>

           </div>
       </div>

       <div className='right'>
           <img src={props.image} alt={props.imgName}/>
       </div>

    </div>
  )
}

export default Card