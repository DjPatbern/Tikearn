import React, { useState } from 'react'
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";


const Faqs = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
  return (
    <>
          <Helmet>
        <title>FAQs - GitHub API App</title>
        <meta
          name="description"
          content="TikEarn Frequently asked questions and answers"
        />
        <link rel="canonical" href="/faqs" />
      </Helmet>
    <motion.div className='faqs-wrapper'         initial={{ width: 0 }}
        animate={{ width: "80%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <h3>Frequently Asked Questions</h3>
      <p className='any-question'>Any questions about TikEarn? we got you covered.</p>
      <div className='faq-show-section'>
        <p>How do I earn with TikEarn as a creator?</p>
        <button onClick={(e) => setShow1(!show1)}>{!show1 ? '+' : '-'}</button>
      </div>
            {
                show1 &&       <p className='faq-answers'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vitae ultricies sodales aliquam nisl magna. Ultricies
                pharetra, donec aliquam vitae. Commodo, fringilla arcu blandit sodales. Enim ut est tincidunt enim. Risus 
                faucibus id libero dolor, donec et duis sit. Libero tempus enim, id amet libero. Interdum diam viverra ultrices sed. </p>
            }

<div className='faq-show-section'>
        <p>How do I earn with TikEarn as a creator?</p>
        <button onClick={(e) => setShow2(!show2)}>{!show2 ? '+' : '-'}</button>
      </div>
            {
                show2 &&       <p className='faq-answers'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vitae ultricies sodales aliquam nisl magna. Ultricies
                pharetra, donec aliquam vitae. Commodo, fringilla arcu blandit sodales. Enim ut est tincidunt enim. Risus 
                faucibus id libero dolor, donec et duis sit. Libero tempus enim, id amet libero. Interdum diam viverra ultrices sed. </p>
            }

<div className='faq-show-section'>
        <p>How do I earn with TikEarn as a creator?</p>
        <button onClick={(e) => setShow3(!show3)}>{!show3 ? '+' : '-'}</button>
      </div>
            {
                show3 &&       <p className='faq-answers'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vitae ultricies sodales aliquam nisl magna. Ultricies
                pharetra, donec aliquam vitae. Commodo, fringilla arcu blandit sodales. Enim ut est tincidunt enim. Risus 
                faucibus id libero dolor, donec et duis sit. Libero tempus enim, id amet libero. Interdum diam viverra ultrices sed. </p>
            }

<div className='faq-show-section'>
        <p>How do I earn with TikEarn as a creator?</p>
        <button onClick={(e) => setShow4(!show4)}>{!show4 ? '+' : '-'}</button>
      </div>
            {
                show4 &&       <p className='faq-answers'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vitae ultricies sodales aliquam nisl magna. Ultricies
                pharetra, donec aliquam vitae. Commodo, fringilla arcu blandit sodales. Enim ut est tincidunt enim. Risus 
                faucibus id libero dolor, donec et duis sit. Libero tempus enim, id amet libero. Interdum diam viverra ultrices sed. </p>
            }

<div className='faq-show-section'>
        <p>How do I earn with TikEarn as a creator?</p>
        <button onClick={(e) => setShow5(!show5)}>{!show5 ? '+' : '-'}</button>
      </div>
            {
                show5 &&       <p className='faq-answers'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo vitae ultricies sodales aliquam nisl magna. Ultricies
                pharetra, donec aliquam vitae. Commodo, fringilla arcu blandit sodales. Enim ut est tincidunt enim. Risus 
                faucibus id libero dolor, donec et duis sit. Libero tempus enim, id amet libero. Interdum diam viverra ultrices sed. </p>
            }
    </motion.div>
    </>
  )
}

export default Faqs
