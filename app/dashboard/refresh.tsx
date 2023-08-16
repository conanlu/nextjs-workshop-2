'use client'

// TODO: implement router.refresh() here 

import { useRouter } from 'next/navigation'

export function RefreshButton() {

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    
  }

  return( 
  <button onClick={handleClick}>refresh me!</button>
  )
}


