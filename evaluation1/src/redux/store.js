import {createStore} from "redux"
import { dataReducer } from "./dataReducer/dataReducer"



const store = createStore(dataReducer)
export {store};