import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newAddPost = React.createRef();

    let newPost = () => {

props.newPost()



    }
    const onChangeClick=()=>{
        let text=newAddPost.current.value;
        props.onChangeClick(text)



    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newAddPost} onChange={onChangeClick} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={newPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;