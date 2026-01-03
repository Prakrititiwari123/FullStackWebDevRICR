import React from 'react'

const Form = () => {

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log('Form submitted');
        
    }

      
  return (
    <>
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input type="text" placeholder='type here' className=' bg-amber-100 text-center border rounded m-5' /> <br />
            <button className='border ms-15 p-1 rounded m-5 hover:bg-gray-600 hover:text-white'>Submit</button>
        </form>
    </div>

    </>
  )
}

export default Form