// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(20)
//   const [user, setUser] = useState('sarthak')

//   function changeNum()
//   {
//     setNum(30)
//     setUser('priya')
//   }



//   return (
//     <div>
//       <h1>age of {user} is {num}</h1>
//       <button onClick={changeNum}>Click me</button>
//     </div>
//   )
// }

// export default App  




import React, { useState } from 'react'
import Form from './FormHandling/form'

const App = () => {


  // const [count, setCount] = useState(0)
  // function increase(){
  //   setCount(count+1)
  // }
  // function decrease(){
  //   setCount(count-1)
  // }
  // function jump5()
  // {
  //   setCount (count+5)
  // }

  // const [num, setNum] = useState({user:'Abc',age:20})
  // const clickMe=()=>{
  //   const newNum={...num}
  //   newNum.user='Pqr'
  //   newNum.age=30
  //   setNum(newNum)
  // }



  return (
    <>
    {/* <div className=' '>
      <h1 className=' h-20 w-20 border p-7 ps-8 m-18 rounded-2xl bg-pink-300'>{count}</h1>
      <button className='border p-2 mx-5 my-5 rounded bg-blue-400 hover:bg-blue-900 hover:text-white' onClick={increase}>increase</button>
      <button className='border p-2 mx-5 my-5 rounded bg-blue-400 hover:bg-blue-900 hover:text-white'onClick={decrease}>decrease</button>
      <button className='border p-2 mx-5 my-5 rounded bg-blue-400 hover:bg-blue-900 hover:text-white'onClick={jump5}>jump by 5</button>
    </div>
 
    <div className='border p-5  h-30 w-30 text-center m-15'>
    <h1>{num.user},{num.age}</h1>
    <button className='border p-2 mx-5 my-5 rounded bg-amber-400 hover:bg-blue-900 hover:text-white' onClick={clickMe}>Click</button>
    </div> */}
    <Form/>
    
    </>
  )
}

export default App