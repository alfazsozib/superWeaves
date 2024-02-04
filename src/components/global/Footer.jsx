
import React from 'react'
import discord from "../icons/Discord.png"
import youtube  from "../icons/Youtube.png"
import twitter from "../icons/Twitter.png"

function Footer() {
  return (
    <div className='footer-section w-[100%] h-32  pt-56 flex justify-center'>
        <div className='footer flex flex-col justify-center items-center leading-loose'>
        <div className=''>
            <h1 className='font-twister text-5xl title_footer py-4'>DWOPE</h1>
        </div>
        <div className='icons flex gap-4 pb-4'>
            <span><img width={50} src={discord} alt="discord" /></span>
            <span><img width={50} src={youtube} alt="youtube" /></span>
            <span><img width={50} src={twitter} alt="twitter" /></span>
        </div>
        <div className='menu flex gap-6 font-mono'>
            <span className=' font-semibold bg-gradient-to-r from-[#ff5136] to-[#f80bd8] text-transparent bg-clip-text'>Contact</span>
            <span className=' font-semibold bg-gradient-to-r from-[#ff5136] to-[#f80bd8] text-transparent bg-clip-text'>Support </span>
            <span className=' font-semibold bg-gradient-to-r from-[#ff5136] to-[#f80bd8] text-transparent bg-clip-text'>Terms Of Policy</span>
            <span className=' font-semibold bg-gradient-to-r from-[#ff5136] to-[#f80bd8] text-transparent bg-clip-text'>Privacy Policy</span>
        </div>
        <div className='cpyright bg-gradient-to-r font-semibold from-[#ff5136] to-[#f80bd8] text-transparent bg-clip-text'>
            <span>Copyright © 2024 DWOPE. </span>
        </div>
        </div>
    </div>
  )
}

export default Footer


