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
    user: string,
}

export interface ILogoutAction {
    type: ActionTypes.LOGOUT,
    user: string,
}

export type ILoginActions = IOpenLoginAction | ICloseLoginAction | IAuthAction | ILogoutAction

const closeLoginAction = (isLogin: boolean): ICloseLoginAction => ({ type: ActionTypes.CLOSE_LOGIN, isLogin })
const openLoginAction = (isLogin: boolean): IOpenLoginAction => ({ type: ActionTypes.OPEN_LOGIN, isLogin })
const authAction = (user: string): IAuthAction => ({ type: ActionTypes.AUTH_USER, user })
const logoutAction = (user: string): ILogoutAction => ({ type: ActionTypes.LOGOUT, user })

export default { closeLoginAction, openLoginAction, authAction, logoutAction }