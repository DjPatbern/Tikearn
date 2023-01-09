import React, {useState} from 'react'
import TikTokImage from '../Assets/Rectangle 7.png'
import Thick from '../Assets/VectorThick.png'


const Intro = () => {
  const [val,setVal] = useState(0)
  function Get(e){
    e.preventDefault()
    setVal(e.target.value)

  }
  return (
<>
<div className='intro-wrapper'>
      <div style={{textAlign: 'left'}}>
        <h3 className='intro-text-1'>
        Tikearn is a platform that enables TikTok creators to earn <span className='money'>Money</span>
        </h3>
        <p className='intro-text-2'>Tikearn also makes it easier for promoters/advertisers to
promote their content at a very affordable rate.</p>
<div className='intro-btns'>
<button className='create-acc-btn'>Create an account</button>
        <button className='how-it-works-btn' id='how'>▶ How it works</button>
</div>
<br></br>
       <div className='range-wrapper'><span className='range-text'>Views: {val * 100}</span><input type="range"  min="0" max="100"  className="progress" onChange={Get} />  <span className='range-text'>Earnings: ${val}</span></div>       
        </div>
        <div className='tiktok'>
        <img src={TikTokImage} alt="Tik Tok" className='tik-img' />
        <div className='earn-text'>
            <img src={Thick} alt="Thick" className='thick-img' />  <span> Earn on the go</span>
            
        </div>
        </div>
    </div>
</>
  )
}

{/* <input type='range' onChange={Get} /> */}
{/*  */}

export default Intro
