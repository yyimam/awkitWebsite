

const INITIAL_STATE = {

    data: {}
}

export default (states = INITIAL_STATE, action: any = {}) => {

    // console.log("some data 1111", action);
    switch (action.type) {
        case "cartData":
            return { cartData: action.data }
        default:
            return states;
    }
}