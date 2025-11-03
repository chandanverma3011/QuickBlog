import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
        <h1 className='md:text-4xl text-2xl font-semibold text-text'>Never Miss a Blog</h1>
        <p className='md:text-lg text-muted pb-8'>Subscribe to get the latest blog, new tech, and exclusive news. </p>
        <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
            <input className='border border-border bg-surface-2 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-text placeholder:text-muted' type="text" placeholder='Enter your email id' required />
            <button type='submit' className='md:px-12 px-8 h-full text-white bg-primary/90 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter