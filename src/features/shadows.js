import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState =[
    {
        id : nanoid(8),
        active : true,
        inset: false,
        input : [
            {
                inputNumber : 1,
                name : "Horizontal Offset",
                value: 0,
                type :"range",
                minMax : [-250,250]
            },
            {
                inputNumber : 2,
                name : "Vertical offset",
                value: 10,
                type :"range",
                minMax : [0,250]
            },
            {
                inputNumber : 3,
                name : "Blue radius",
                value: 15,
                type :"range",
                minMax : [0,250]
            },
            {
                inputNumber : 4,
                name : "Spread Offset",
                value: -3,
                type :"range",
                minMax : [-250,250]
            },
            {
                inputNumber : 5,
                name : "Color",
                value: '#4f4f4f',
                type :"color",
            },
        ]
    }
]

export const shadowsSlice = createSlice({
    name: "shadow",
    initialState,
    reducers:{
        removeShadow : (state,action) => {

            const shadowIndexToRemove = state.findIndex(shadow => shadow.id === action.payload)
            state.splice(shadowIndexToRemove,1)
        },
        addShadow : (state,action) => {
            state.push(
                {
                    id : nanoid(8),
                    active : true,
                    inset: false,
                    input : [
                        {
                            inputNumber : 1,
                            name : "Horizontal Offset",
                            value: 0,
                            type :"range",
                            minMax : [-250,250]
                        },
                        {
                            inputNumber : 2,
                            name : "Vertical offset",
                            value: 10,
                            type :"range",
                            minMax : [0,250]
                        },
                        {
                            inputNumber : 3,
                            name : "Blue radius",
                            value: 15,
                            type :"range",
                            minMax : [0,250]
                        },
                        {
                            inputNumber : 4,
                            name : "Spread Offset",
                            value: -3,
                            type :"range",
                            minMax : [-250,250]
                        },
                        {
                            inputNumber : 5,
                            name : "Color",
                            value: '#4f4f4f',
                            type :"color",
                        },
                    ]
                }
            )

        },
        updateShadowValue : (state,action) => {
            
            const currentShadow = state.find( shadow => shadow.id === action.payload.shadowID)

            const currentInput = currentShadow.input.find( input => input.inputNumber === action.payload.inputNumber)

            currentInput.value = action.payload.value

        },
        updateCheckbox : (state,action) => {
            const currentShadow = state.find( shadow => shadow.id === action.payload.shadowID)
            currentShadow[action.payload.name] = !currentShadow[action.payload.name]
        },
    }
})


export const {updateShadowValue, addShadow,updateCheckbox,removeShadow} = shadowsSlice.actions
export default shadowsSlice.reducer