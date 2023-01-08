import React from 'react'
import errorImage from '../Assets/404page.png'
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
  return (
    <>
        <Helmet>
        <title>TikEarn</title>
        <meta
          name="description"
          content="Undefined Page"
        />
        <link rel="canonical" href="/undefined" />
      </Helmet>
    <motion.div         initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <img src={errorImage} alt="404 NOT FOUND" style={{maxWidth: "80%", minHeight: "70vh"}} />
    </motion.div>
    </>
  )
}

export default ErrorPage
