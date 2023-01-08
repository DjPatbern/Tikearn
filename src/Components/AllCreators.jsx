import React from 'react'
import star3 from '../Assets/Star 3.png'
import star4 from '../Assets/Star 4.png'
import star5 from '../Assets/Star 5.png'
import star6 from '../Assets/Star 6.png'
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";


const AllCreators = () => {
  return (
    <>
          <Helmet>
        <title>Top Creators - TikEarn</title>
        <meta
          name="description"
          content="TikEarn Top Creators"
        /> 
        <link rel="canonical" href="/allcreators" />
      </Helmet>
    <motion.div         initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <h3 className='creators-header'>Top Creators</h3>
      <div className='creators-wrapper'>
    
                    <img src={star3} className='creator-img' alt="star 1" />
                    <img src={star6} className='creator-img' alt=""  />
                    <img src={star4} className='creator-img' alt=""  />
                    <img src={star5} className='creator-img' alt=""  /> 
                    <img src={star4} className='creator-img' alt=""  />
           
                    <img src={star6} className='creator-img' alt=""  />
                    <img src={star3} className='creator-img' alt="star 1" />
                    <img src={star6} className='creator-img' alt=""  />

                    <img src={star3} className='creator-img' alt=""  />
                    <img src={star5} className='creator-img' alt=""  />
                    <img src={star4} className='creator-img' alt=""  />
                    <img src={star5} className='creator-img' alt=""  />
                
      </div>
    </motion.div>
    </>
  )
}

export default AllCreators

