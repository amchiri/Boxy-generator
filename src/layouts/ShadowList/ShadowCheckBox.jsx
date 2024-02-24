import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCheckbox } from '../../features/shadows'

function ShadowCheckBox({name,shadowID}) {
    const checkboxshadow = useSelector(state => state.shadows.find(shadow => shadow.id === shadowID))
    const dispatch = useDispatch()
  return (
    <>
    <input 
    type='checkbox' 
    onChange={()=>dispatch(updateCheckbox({shadowID,name}))}
    checked={checkboxshadow[name]}
    id={`checkbox-${name}-${shadowID}`}
    className='h-4 w-4 border-gray-300 rounded mr-2'
    />
    <label 
    className='leading-4 mr-5'
    htmlFor={`checkbox-${name}-${shadowID}`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
    </label>
    
    </>
  )
}

export default ShadowCheckBox