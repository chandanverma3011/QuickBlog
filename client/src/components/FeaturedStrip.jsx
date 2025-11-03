import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const FeaturedStrip = () => {
  const { blogs } = useAppContext()
  const navigate = useNavigate()
  const featured = (blogs || []).slice(0, 4)

  if (!featured.length) return null

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 my-10'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {featured.map((b, i)=> (
          <div key={b._id} onClick={()=>navigate(`/blog/${b._id}`)} className={`relative overflow-hidden rounded-2xl border border-border bg-surface group cursor-pointer ${i===0 ? 'md:col-span-2 row-span-2 h-64 md:h-full' : 'h-40'}`}>
            <img src={b.image} alt="" className='w-full h-full object-cover opacity-90 group-hover:opacity-100 transition' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent' />
            <div className='absolute bottom-0 p-4'>
              <span className='text-xs bg-primary/80 text-white px-2 py-0.5 rounded-full'>{b.category}</span>
              <h4 className='text-white mt-2 text-sm md:text-base line-clamp-2'>{b.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedStrip


