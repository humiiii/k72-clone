import React from 'react'
import { Link } from 'react-router-dom'

const HomeLinks = ({ to }) => {
  return (
    <Link 
      to={`/${to}`}
      className='
        w-fit
        px-8
        rounded-full 
        border-[3px] 
        flex 
        items-center 
        justify-center
        overflow-hidden  
        tracking-wide  
        hover:border-[#D3FD50]
        hover:text-[#D3FD50]
        
      ' 
    >
      <span className='
          font-lausanne-regular 
          uppercase 
          text-[7vw]
          leading-none 
          translate-y-3
      '>
        {to}
      </span>
    </Link>
  )
}

export default HomeLinks