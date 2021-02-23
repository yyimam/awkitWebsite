const INITIAL_STATE = {
    zipCode: "",
    storeType: ""
}

export default (states = INITIAL_STATE, action) => {
    // console.log("actionzip", action.payload)
    switch (action.type) {
        case "SEND_ZIPCODE":
            return { 
                zipCode: action.payload.zip_Code, 
                storeType: action.payload.store_Type }
    }
    return states;

}