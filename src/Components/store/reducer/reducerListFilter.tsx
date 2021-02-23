

const INITIAL_STATE = {

    data: []
}

export default (states = INITIAL_STATE, action: any = {}) => {

    // console.log("some data 2222", action);
    switch (action.type) {
        case "notFixedClass":
            return { notFixedClass: action.data }
      
        default:
            return states;
    }
}