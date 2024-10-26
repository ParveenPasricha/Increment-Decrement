// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const Demo = () => {
    const [count, setCount]= useState(0)
    function incr()
    {
        if(count===10)
        {
            alert("Bus kar bhai or kitna increment karaga")
        }
        else{
        setCount(count + 1);}
    }
    function decr()
    {
        if(count===0){
            alert("main jhukega nahi sala")
        }
        else{
            setCount(count - 1);
        }
    }
    return (
        <div className='w-full flex justify-center items-center h-screen'>
                <div className=''>
                    <div className='text-2xl'><button className='bg-blue-700'  onClick={incr}>Increment</button></div>
                    <div className='text-2xl'>Count:- {count}</div>
                    <div className='text-2xl'><button className='bg-red-600'  onClick={decr}>Decrement</button></div>
                </div>
        </div>
             
      )
    }
  

export default Demo
