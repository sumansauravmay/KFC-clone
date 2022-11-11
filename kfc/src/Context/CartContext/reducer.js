const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":{
            return [
                ...state,
                action.payload
            ]
        }
           
            case "REMOVE_FROM_CART":{
                const cartAfterItemRemovable=state.filter((item)=>item.id!==action.payload
                )
                return cartAfterItemRemovable
            }
            case "CHECKOUT":{
                return [];
            }
            default: {
                return state
            }
               
                
    }
    }
    export default reducer;