/* eslint-disable import/no-anonymous-default-export */
export default (state , action) => {
    switch(action.type){
        case 'DELETE-TRANSACTION':
        return{
            ...state,
            transactions: state.transactions.filter(trans => trans.id !== action.payload)
        }
        case 'ADD-TRANSACTION':
            return{
                ...state,
                transactions:[action.payload, ...state.transactions],
                
            }
        default: return state
    }
    
}