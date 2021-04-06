import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return(
        <div className={s.item}>
                <div>{props.msg}</div>
                <div>{props.like_count} likes</div>
        </div>
    )
}

export default Post;