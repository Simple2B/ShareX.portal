import { ActionTypesProfile } from "./action_types";

export interface IShowImgAction {
    type: ActionTypesProfile.SHOW_IMG
}

export interface IOpenLinkAction {
    type: ActionTypesProfile.OPEN_LINK
}

export interface ICopyLinkAction {
    type: ActionTypesProfile.COPY_LINK
}

export interface IDeleteLinkAction {
    type: ActionTypesProfile.DELETE_IMG,
    payload: number
}

export type IProfileActions = IShowImgAction | IOpenLinkAction | ICopyLinkAction | IDeleteLinkAction

const showImgAction = (): IShowImgAction => ({ type: ActionTypesProfile.SHOW_IMG })
const openLinkAction = (): IOpenLinkAction => ({ type: ActionTypesProfile.OPEN_LINK })
const copyLinkAction = (): ICopyLinkAction => ({ type: ActionTypesProfile.COPY_LINK })
const deleteLinkAction = (imgNumber: number): IDeleteLinkAction => ({ type: ActionTypesProfile.DELETE_IMG, payload: imgNumber })

export default { showImgAction, openLinkAction, copyLinkAction, deleteLinkAction }