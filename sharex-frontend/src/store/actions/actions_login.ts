import { ActionTypes } from "./action_types";

export interface IOpenLoginAction {
    type: ActionTypes.OPEN_LOGIN,
    isLogin: boolean,
}

export interface ICloseLoginAction {
    type: ActionTypes.CLOSE_LOGIN,
    isLogin: boolean,
}

export interface IAuthAction {
    type: ActionTypes.AUTH_USER,
    user: {},
}

export interface ILogoutAction {
    type: ActionTypes.LOGOUT,
    user: {},
}

export type ILoginActions = IOpenLoginAction | ICloseLoginAction | IAuthAction | ILogoutAction

const closeLoginAction = (isLogin: boolean): ICloseLoginAction => ({ type: ActionTypes.CLOSE_LOGIN, isLogin: isLogin })
const openLoginAction = (isLogin: boolean): IOpenLoginAction => ({ type: ActionTypes.OPEN_LOGIN, isLogin: isLogin })
const authAction = (user: {}): IAuthAction => ({ type: ActionTypes.AUTH_USER, user: user })
const logoutAction = (user: {}): ILogoutAction => ({ type: ActionTypes.LOGOUT, user: user })

export default { closeLoginAction, openLoginAction, authAction, logoutAction }