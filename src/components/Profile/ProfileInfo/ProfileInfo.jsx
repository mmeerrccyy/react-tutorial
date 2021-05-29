import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) =>{

    if(!props.profile){
        return <Preloader />
    }

    return(
        <div>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' alt='banner'/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.small} alt='ava'/>
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;