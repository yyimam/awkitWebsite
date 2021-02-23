

const INITIAL_STATE = {

    data: []
}

export default (states = INITIAL_STATE, action: any = {}) => {

    // console.log("some data 1111", action);
    switch (action.type) {
        case "cart":
            return { cart: action.data }
        default:
            return states;
    }
}