import React from 'react'
import { useAppContext } from '../context/AppContext'

const TrendingSidebar = () => {

  const { blogs } = useAppContext()
  const top = (blogs || []).slice(0, 6)

  return (
    <aside className='hidden lg:block w-full lg:w-[320px] xl:w-[360px]'>
      <div className='sticky top-6 space-y-6'>
        <div className='bg-surface border border-border rounded-xl p-5'>
          <h3 className='text-text font-semibold mb-4'>Trending</h3>
          <ul className='space-y-3'>
            {top.map((b)=> (
              <li key={b._id} className='group'>
                <a href={`/blog/${b._id}`} className='text-sm text-muted group-hover:text-text transition'>
                  {b.title}
                </a>
                <div className='text-xs text-muted/70'>{b.category}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className='bg-surface border border-border rounded-xl p-5'>
          <h3 className='text-text font-semibold mb-3'>Categories</h3>
          <div className='flex flex-wrap gap-2'>
            {['Technology','Startup','Lifestyle','Finance'].map(c=> (
              <span key={c} className='text-xs px-3 py-1 rounded-full border border-border bg-surface-2 text-muted'>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default TrendingSidebar


