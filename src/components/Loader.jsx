import React from 'react'
import LoaderImg from "../assets/loader.svg"
const Loader = () => {
  return (
    <div className='absolute grid place-items-center left-0 right-0 bottom-0 top-0 -z-10'>
        <img className='sm:w-24 sm:h-24 md:w-40 md:h-40' src={LoaderImg} />
    </div>
  )
}

export default Loader