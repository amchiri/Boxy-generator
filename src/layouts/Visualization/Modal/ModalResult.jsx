import React from 'react'
import getBoxShadowValue from '../../../utils/getBoxShadowValue'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function ModalResult({ closeModal }) {

    useEffect(() => {
        document.body.style.overflowY = "hidden"

        return () => document.body.style.overflowY = "autop"
    }, [])
    const shadowValues = useSelector(state => state.shadows)

    let runningAnimation = false 
    function handleCopy(e){
        if(!runningAnimation){
            runningAnimation = true
            e.target.textContent = "Copied !"

            setTimeout(()=>{
                runningAnimation = false
                e.target.textContent = "copy !"
            },1250)
        }

        navigator.clipboard.writeText("box-shadow :"+ getBoxShadowValue(shadowValues))
    }
    return (
        <div
            onClick={() => closeModal()}
            className='fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75'>
            <div
                onClick={e => e.stopPropagation()}
                className='max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]'>

                <div className='flex items-end mb-5'>
                    <p> Here is your code 🎊</p>
                    <button
                    onClick={handleCopy}
                        className='ml-auto mr-2 text-sm bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded'>Copy</button>
                    <button
                        className='text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded' onClick={() => closeModal()} >Close</button>
                </div>
                <p className='rounded bg-gray-100 p-5'>
                    <span className='font-semibold'> box-shadow :</span>
                    <span> {`${getBoxShadowValue(shadowValues)}`}</span>
                </p>
            </div>
        </div>
    )
}

export default ModalResult