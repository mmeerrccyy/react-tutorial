import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {
            msg: "Hello world",
            like_count: 5
        }
    ]

    return(
        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post msg = {postsData[0].msg} like_count = {postsData[0].like_count}/>
            </div>
        </div>
    )
}

export default MyPosts;