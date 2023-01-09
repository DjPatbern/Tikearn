import React from 'react'
import star1 from '../Assets/Star 1.png'
import star8 from '../Assets/Star 8.png'

const DownloadApps = () => {
  return (
    <div className='download-app-wrapper' style={{color: "black"}}>
      <div className='sign-as-creator-wrapper'>
        <img src={star1} alt="phone" />
        <h3 id='creator-h3'>Creator</h3>
        <p>These are TikTok creators who earn money from the platform by using sounds/videos from the platform to create content on Tiktok.</p>
        <button>Signup as a Creator</button>
      </div>
      <div id='sign-up-as-promoter'>
        <h3 className='promoter-h3'>Advertisers</h3>
        <p>These are people who want to promote their craft, business, or products. The content for promotion can be a sound or a video (in a format supported by TikTok).</p>
        <button>Signup as a Promoter</button><br></br>
        <img src={star8} alt="phone" />
      </div>

    </div>
  )
}

export default DownloadApps
