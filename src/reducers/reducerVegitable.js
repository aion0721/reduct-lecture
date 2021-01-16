import { SELL_VEGETABLE} from './actionTypes'

const reducerVegetable = (state[], action) => {
    switch(action.type){
        case SELL_MEAT: return{
            ...state,
            numOfVegetable: state.numOfVegetable =1
        }
        default: return state
    }
}

export default reducerVegetable