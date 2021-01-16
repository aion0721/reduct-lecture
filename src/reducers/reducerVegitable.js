import { SELL_VEGETABLE } from './actionTypes'

const reducerVegitable = (state=[], action) => {
    switch(action.type){
        case SELL_VEGETABLE: return {
            ...state,
            numOfVegitable: state.numOfVegitable -1
        }
        default: return state
    }
}

export default recuderVegitable