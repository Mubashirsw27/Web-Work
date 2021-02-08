const INITIAL_STATE = {
    app_name: "Badmaash"
}

export default (state = INITIAL_STATE, action) => {
    console.log("Action=>", action)
    switch(action.type)
    {
        case "SETDATA" : 
        return({
            ...state,
            app_name : action.data
        })
    }
    return state;
}