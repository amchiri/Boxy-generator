import React from 'react'
import { useState, useEffect } from 'react'
import chevron from "../../assets/chevron.svg"
import ShadowColorPicker from './ShadowColorPicker'
import ShadowRange from './ShadowRange'
import { removeShadow } from '../../features/shadows'
import ShadowCheckBox from './ShadowCheckBox'
import { useDispatch } from 'react-redux'

function Shadow({panelNumber,keys,shadow}) {


    const [toggleShadow,setToggleShadow]=useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(panelNumber === 1){
            setToggleShadow(true)
        }
    },[])

   

    const shadowInput = shadow.input.map((input,index) => {
        if(input.type === "range"){
          return <ShadowRange  inputData={shadow.input[index] } shadowID={shadow.id}/>
        }
        else if(input.type === "color"){
          return <ShadowColorPicker inputData={shadow.input[index]} shadowID={shadow.id}/>
        }
      })

  return (
    <li className='bg-gray-50 border-p border-gray-300 '
     key={keys}> 
     <button 
     className='w-full'
     onClick={()=> setToggleShadow(!toggleShadow)}>
     <span>Shadow {panelNumber}</span>
     <img 
     style={{
        transform : `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`
     }}
     className='font-bold w-5'
     src={chevron} alt=""/>
     </button>
     {toggleShadow && 
     <>
        <div className='flex items-end px-6 pt-4'>
            <ShadowCheckBox name={"active"} shadowID={shadow.id}/>
            <ShadowCheckBox name={"inset"} shadowID={shadow.id} />
            <button  onClick={()=>dispatch(removeShadow(shadow.id))}className='ml-auto text-sm bg-red-600 hover:bg-red-700 py-1 px-3 rounded'>Remove</button>
        </div>
        <div className='px-6 py-4'>
          
            {shadowInput}
        </div>
     </>
     }
     </li>
  )
}

export default Shadow