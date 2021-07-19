import { ActionTypesProfile } from "../actions/action_types"
import { IProfileActions } from "../actions/action_profile"
import img1 from '/home/varvara/ShareX.portal/sharex-frontend/src/img/scanImg/text1.jpg'
import img2 from '/home/varvara/ShareX.portal/sharex-frontend/src/img/scanImg/text2.png'
import img3 from '/home/varvara/ShareX.portal/sharex-frontend/src/img/scanImg/text3.png'


const initialState = {
    config: `{
    "DestinationType": "ImageUploader, TextUploader, FileUploader",
    "RequestURL": "https://tsyboom.is-inside.me/upload",
    "FileFormName": "file",
    "Headers": {
        "key": "Aul3H9HPEDPxLb7NTmUifsO6GMGjrDJy"
    },
    "URL": "$json:url$",
    "ErrorMessage": "$json:error$"
}`,
    uploadFile: [
        img1,
        img2,
        img3
    ]

}


export const reducer_profile = (state = initialState, action: IProfileActions) => {
    switch (action.type) {

        // case ActionTypesProfile.SHOW_IMG:
        //     state = {}
        //     return {}

        case ActionTypesProfile.DELETE_IMG:
            return {
                ...state,
                uploadFile: state.uploadFile.filter((file, index) => index !== action.payload)
            }


        default:
            return state
    }
}
