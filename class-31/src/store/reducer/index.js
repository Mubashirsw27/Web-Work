const INITIAL_STATE = {
    user:[{
        id : 27,
        name : "Mubashir"
    }]
}

export default (state = INITIAL_STATE,action)=>{
    switch ( action.type ){
        
        case "SETDATA" : 
        console.log( " State :",state);
        return({
            ...state,
            user :[...state.user,action.data]
        
        })

    }
    return state;
}