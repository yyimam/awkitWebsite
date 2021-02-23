import { store } from ".."


const send_Data = data => {
    // console.log("disData",data);
    
    store.dispatch({
        type: "SEND_ZIPCODE",
        payload: {
            zip_Code: data.zip,
            store_Type: data.storeTyp
        }
    })
}



const send_record = record => {
    store.dispatch({
        type: "SEND_RECORD",
        payload: record
    })
}




export {
    send_Data,
    send_record
}