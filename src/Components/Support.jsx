import React from 'react'
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";


const Support = () => {
  return (
    <>
          <Helmet>
        <title>Support - TikEarn</title>
        <meta
          name="description"
          content="Get support from TikEarn support team"
        />
        <link rel="canonical" href="/support" />
      </Helmet>
    <motion.div className='support-wrapper'         initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <h3>You’ve reached support</h3>
      <p className='form-fill-text'>Fill out the form to get in touch with us</p>
      <div className='form'>
        <form>
        <p>Full name</p>
        <input type='name' placeholder='Eg. Davio White' />

        <p>Email</p>
        <input type='email' placeholder='Eg. daviowhite@gmail.com' />

        <p>Location</p>
        <input type='location' placeholder='Eg. United states of America' />

        <p>Message</p>
        <textarea type='text' placeholder='Type your message' /><br></br>
        <button>Submit</button>
        </form>
      </div>
    </motion.div>
    </>
  )
}

export default Support
