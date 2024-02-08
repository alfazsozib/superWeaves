
import React from 'react'
import discord from "../icons/Discord.png"
import youtube  from "../icons/Youtube.png"
import twitter from "../icons/Twitter.png"

function Footer() {
  return (
    <div className='footer-section w-[100%] h-32  max-sm:pb-24 max-sm:mb-48 pt-56 flex justify-center'>
        <div className='footer flex flex-col justify-center items-center leading-loose'>
        <div className=''>
            <h1 className='font-twister text-5xl title_footer py-4'>DWOPE</h1>
        </div>
        <div className='icons card-title flex gap-4 pb-4 z-10'>
            <span><img width={50} src={discord} alt="discord" /></span>
            <span><img width={50} src={youtube} alt="youtube" /></span>
            <a href="https://x.com/dwopes"><span><img width={50} src={twitter} alt="twitter" /></span></a>
        </div>
        <div className='menu flex gap-10 font-mono z-10'>
            {/* <span className=' font-semibold bg-gradient-to-r from-[#ff5136] to-[#f80bd8] text-transparent bg-clip-text'>Contact</span> */}
            {/* <span className=' font-semibold bg-gradient-to-r from-[#ff5136] to-[#f80bd8] text-transparent bg-clip-text'>Support </span> */}
            <span className='card-title font-semibold   text-transparent bg-clip-text'><a href="https://dwope.works/terms">Terms Of Use</a> </span>
            <span className='card-title font-semibold text-transparent bg-clip-text'><a href="https://dwope.works/privacy">Privacy Policy</a> </span>
        </div> 
         <div className='cpyright font-semibold card-title text-transparent bg-clip-text'>
            <span>Copyright © 2024 DWOPE. </span>
        </div>
        </div>
    </div>
  )
}

export default Footer


