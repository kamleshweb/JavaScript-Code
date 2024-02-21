const initialState = {
    count: 0
}
const counterReducer = (state = initialState, action ) =>{
    switch(type.action){
        case 'INCREMENT':
            return{
                ...state,
                count: this.state + 1
            }
            case 'DECREMENT':
                return{
                    ...state,
                    count: this.state - 1
                }
                default: 
                return state
    }
}
export default counterReducer;