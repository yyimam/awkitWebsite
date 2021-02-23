// import reducer from './reducerDoctor';

import { combineReducers } from "redux";
import reducerHome from "./reducerHome";
import reducerListSideMap from "./reducerListSideMap";
import reducerListFilter from "./reducerListFilter";
import reducerDetailPage2 from "./reducerDetailPage2";
import reducerSubmitRes from "./reducerSubmitRes";
import reducerSubmitRider from "./reducerSubmitRider";
import reducerOrder from "./reducerOrder";
import reducerConfirmOrder from "./reducerConfirmOrder";
import reducerOrderTracking from "./reducerOrderTracking";
import reducerSign from "./reducerSign";
import reducerZipCode from './reducerZipCode';
import reducerGraphqlRecord from './reducerGraphqlRecord';

// import reducerHospital from './reducerHospital';


const rootReducer = combineReducers({
    reducerHome: reducerHome,
    reducerListSideMap: reducerListSideMap,
    reducerListFilter: reducerListFilter,
    reducerDetailPage2: reducerDetailPage2,
    reducerSubmitRes: reducerSubmitRes,
    reducerSubmitRider: reducerSubmitRider,
    reducerOrder: reducerOrder,
    reducerConfirmOrder: reducerConfirmOrder,
    reducerOrderTracking: reducerOrderTracking,
    reducerSign: reducerSign,
    reducerZipCode: reducerZipCode,
    reducerGraphqlRecord: reducerGraphqlRecord,
})

export default rootReducer;