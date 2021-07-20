import { ActionTypes } from "../actions/action_types"
import { ILoginActions } from "../actions/actions_login"

interface LoginReducerState {
     isLogin: boolean,
     user: string,
     isAuth: boolean,
}

const initialState: LoginReducerState = {
     isLogin: false,
     user: localStorage.getItem("user") ?? "",
     isAuth: false,
}


export const reducer_login = (state: LoginReducerState = initialState, action: ILoginActions) => {
     switch (action.type) {

          case ActionTypes.OPEN_LOGIN:
               return {
                    ...state,
                    isLogin: state.isLogin = true
               }

          case ActionTypes.CLOSE_LOGIN:
               return {
                    ...state,
                    isLogin: state.isLogin = false
               }

          case ActionTypes.AUTH_USER:
               return {
                    ...state,
                    isLogin: state.isLogin = false,
                    isAuth: state.isAuth = true,
                    user: action.user,
               }
          case ActionTypes.LOGOUT:
               return {
                    ...state,
                    // isLogin: state.isLogin = false,
                    isAuth: state.isAuth = false,
                    user: "",
               }

          default:
               return state
     }
}


