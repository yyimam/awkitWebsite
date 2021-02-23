const INITIAL_STATE = {
    rec:{}
      
}

export default (states = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SEND_RECORD":
    console.log("action", action.payload.record)
            return ({
                ...states,
                rec: action.payload.record
            })
    }
    return states;

}