import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'bootstrap/dist/css/bootstrap.min.css';
import star3 from '../Assets/Star 3.png'
import star4 from '../Assets/Star 4.png'
import star5 from '../Assets/Star 5.png'
import star6 from '../Assets/Star 6.png'
import Intro from './Intro';
import DownloadApps from './DownloadApps';
import {Link} from 'react-router-dom'
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";



const Home = () => {

const TopCreators =() =>{
    return(
        <div className='creators-swiper-wrapper'>
        <div style={{display: "flex", justifyContent: "space-between", marginBottom: '5%'}}>
            <p>Top Creators</p>
            <Link to='/allcreators' className='see-all'>See all</Link>
        </div>
            <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={5}
            spaceBetween={30}
            >
                <SwiperSlide>
                    <img src={star3} className='creator-img' alt="star 1" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={star4} className='creator-img' alt=""  />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={star5} className='creator-img' alt=""  />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={star6} className='creator-img' alt=""  />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={star3} className='creator-img' alt=""  />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={star4} className='creator-img' alt=""  />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={star5} className='creator-img' alt=""  />
                </SwiperSlide>

            </Swiper>
      </div>
    )
}


  return (
    <>
    <Helmet>
        <title>Home - TikEarn</title>
        <meta
          name="description"
          content="This is TikEarn Home Page, a platform that enables TikTok creators to earn Money"
        />
        <link rel="canonical" href="/" />
      </Helmet>
    <motion.div         initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
        <Intro />
        <TopCreators />
      <DownloadApps />
    </motion.div>
    </>
  )
}

export default Home
