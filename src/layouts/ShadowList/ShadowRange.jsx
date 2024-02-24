import React from 'react'
import { useDispatch } from 'react-redux'
import { updateShadowValue } from '../../features/shadows'


function ShadowRange({inputData,shadowID}) {

  const dispatch = useDispatch()

  function handleInput(e) {
      dispatch(updateShadowValue({
          inputNumber: inputData.inputNumber,
          value: e.target.value,
          shadowID
      }))
  }


  return (
    <div className='my-4'>
        <div className='flex justify-between items-baseline'>
            <p> {inputData.name}</p>
            <div className='flex items-baseline mb-2'>
                <input
                className='w-14 h-8 mr-2 border border-gray-200 text-center'
                type='number'
                value={inputData.value}
                onChange={handleInput}
                />
                <p>px</p>
            </div>
        </div>
        <div className='relative z-0 w-full flex items-center'>
                <input
                min={inputData.minMax[0]}
                max={inputData.minMax[1]}
                className='w-full h-[3px] bg-gray-300 rounded-lg appearance-non cursor-pointer'
                type='range'
                value={inputData.value}
                onChange={handleInput}
                />
                <div className='absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0.5 h-10 bg-gray-300 rounded'></div>
            </div>
    </div>
  )
}

export default ShadowRange