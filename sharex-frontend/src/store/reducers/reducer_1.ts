import { ActionTypes } from "../actions/action_types"
import {ILoginActions} from "../actions/actions_login"


const initialState = {
     isLogin: false
}


export const reducer_login = (state = initialState, action: ILoginActions) => {
     switch(action.type) {

          case ActionTypes.OPEN_LOGIN:
               return {isLogin: true}

          case ActionTypes.CLOSE_LOGIN:
               return { isLogin: false}

          default:
               return state
     }
}


