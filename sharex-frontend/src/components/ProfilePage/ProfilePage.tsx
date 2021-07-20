import React, { useState } from "react";
import "./ProfilePage.sass";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import profileActions from "../../store/actions/action_profile";

const ProfilePage = () => {
    const { config, uploadFile = [] } = useTypesSelector((state) => {
        return state.reducer_profile
    });

    const dispatch = useDispatch();

    const handleClickDelete = (fileNumber: number) => {
        dispatch(profileActions.deleteLinkAction(fileNumber));
    };

    const [showImg, setShowImg] = useState(false)

    const showHideImg = (currentTarget: any, file: string) => {
        console.log(currentTarget)
        const iconId = document.getElementById(file)
        console.log(iconId)
        if (currentTarget && iconId) {
            setShowImg(!showImg)
        }
    }

    return (
        <article className="profileContainer">
            <div className="keyContainer">
                <label htmlFor="key" className="key">Your Key</label>
                <input type="text" id="key" className="inputKey" placeholder="" />
            </div>

            <div className="dataContainer">
                <div className="dataContainer__title">
                    <div className="title">ShareX Config</div>
                    <div className="linkDownload">Download</div>
                </div>
                <div className="dataContainer__description" >
                    {/* {JSON.stringify(config, null, 2)} */}
                    <div className="text">{config}</div>
                </div>

                <div className="containerBtn">
                    <div className="btn FAQ">FAQ</div>
                    <div className="btn downloadData">Download Data</div>
                    <div className="btn deleteAccount"> Delete Account</div>
                    <div className="btn logout">Logout</div>
                    <div className="btn allFiles"> All Files</div>
                </div>
            </div>

            <div className="profileFooter">
                <div className="text">Last 20 Uploads</div>

                <div className="infoUploads">
                    {
                        uploadFile.length != 0 ?
                            (<>
                                {
                                    uploadFile.map((file, fileNumber) => (
                                        <div className="uploadFile" key={fileNumber}>
                                            <div className="icons">
                                                <div
                                                    className="iconContainer"
                                                    onMouseEnter={(e) => {
                                                        return showHideImg(e.currentTarget, file)
                                                    }}
                                                    onMouseLeave={(e) => showHideImg(e.currentTarget, file)}
                                                >
                                                    <i className="far fa-image" id={file}>

                                                        <div className={!showImg ? "containerHideImg" : "containerShowImg"}>
                                                            <img
                                                                src={file}
                                                                alt={file.split("/")[file.split("/").length - 1]}
                                                                className="showImg"
                                                            />
                                                        </div>

                                                    </i>
                                                </div>
                                                <div className="iconContainer">
                                                    <i className="fas fa-link"></i>
                                                </div>
                                                <div className="iconContainer">
                                                    <i className="far fa-copy"></i>
                                                </div>
                                            </div>

                                            <div className="file">
                                                <div className="fileName">
                                                    {file.split("/")[file.split("/").length - 1]}
                                                </div>
                                            </div>

                                            <div className="iconContainer" onClick={() => handleClickDelete(fileNumber)}>
                                                <i className="far fa-trash-alt"></i>
                                            </div>
                                        </div>
                                    )
                                    )
                                }
                                < div className="sizeInfo">
                                    You have {uploadFile.length} files hosted onour site. Total of {0} {"MB"}.
                                </div>
                            </>)
                            :
                            <>
                                This page only your last 20 file uploads.
                                If you can't find what you're looking for, try <a href="#" className="link">this</a>.
                            </>
                    }

                </div>
            </div>
        </article >
    );
};

export default ProfilePage;
