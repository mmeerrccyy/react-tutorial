import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postsElements = props.posts.map((el) => <Post msg={el.msg} like_count={el.like_count} key={el.id}/>);

    let NewPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        debugger;
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            my posts
            <div>
                <div>
                    <textarea ref={NewPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;