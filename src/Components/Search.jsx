import React from 'react'
import { usemyCustomhook } from '../context'


const Search = () => {
 const {getinput ,setGetInput,Error} = usemyCustomhook()
 
  return (
    <>
    <div className='heading '>
      
      <h1 className='text-3xl text-gray-400 md:text-center md:text-7xl p-8'> <span className='text-red-700'>M</span>ovies <span className='text-red-700'>H</span>ere </h1>
      
    </div>
    <div className='md:container container'>
    
      <form method='Get' action='#' onSubmit={(e)=> e.preventDefault()}>
         <div className='search-input'>
          <input className='md:p-4 md:w-1/2 md:mt-20 md:mb-20 md:ml-80 p-2 mt-5 mb-5 ml-10 w-25' type='search' placeholder='Search Here' value={getinput}
            onChange={(e)=>setGetInput(e.target.value)}
          />
        
         </div>
         
      </form>
      <div className='error'>
        <p className='text-center md:mb-8'>{Error.show && Error.msg}</p>
      </div>
      </div>
    </>
  )
}

export default Search