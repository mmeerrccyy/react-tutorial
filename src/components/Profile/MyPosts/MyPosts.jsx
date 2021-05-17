import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map((el) => <Post msg={el.msg} like_count={el.like_count}/>);

    let NewPostElement = React.createRef();

    let addPost = () => {
        let text = NewPostElement.current.value;
        props.addPost(text);
        NewPostElement.current.value = '';
    }

    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea ref={NewPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;