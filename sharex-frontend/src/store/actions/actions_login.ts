import { ActionTypes } from "./action_types";

export interface IOpenLoginAction {
    type: ActionTypes.OPEN_LOGIN
}

export interface ICloseLoginAction {
    type: ActionTypes.CLOSE_LOGIN
}

export type ILoginActions = IOpenLoginAction | ICloseLoginAction

const closeLoginAction = ():ICloseLoginAction => ({type: ActionTypes.CLOSE_LOGIN})
const openLoginAction = ():IOpenLoginAction => ({type: ActionTypes.OPEN_LOGIN})

export default { closeLoginAction, openLoginAction }