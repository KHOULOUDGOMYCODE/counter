import {INCREMENT, DECREMENT } from '../Actionstypes/Actionstypes'

const initialState={
    count:0

}
function CountReducer (state=initialState, action){
    switch (action.type){
        case INCREMENT:
        return {...state, count: state.count+1}
        case DECREMENT:
        return {...state, count: state.count-1}
        default:
            return state
    }
}
export default CountReducer