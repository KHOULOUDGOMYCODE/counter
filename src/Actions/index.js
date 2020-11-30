import {INCREMENT, DECREMENT } from '../Actionstypes/Actionstypes'

export const inc=()=>
{
    return{
        type:INCREMENT
    }
}
export const dec=()=>
{
    return{
        type:DECREMENT
    }
}

