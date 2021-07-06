import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import dp from '../images/dp.jpeg';
import Avatar from '@material-ui/core/Avatar';
import './Post.css';
import { db } from '../config/firebase';
import { Button, Input } from '@material-ui/core';
function Post({ postID, user, username, caption, imgUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    useEffect(() => {
        let unsubscribe;
        if (postID) {
            unsubscribe = db
                .collection("posts")
                .doc(postID)
                .collection("comments")
                .orderBy('timestamp','asc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) =>  doc.data()));
                });
        }
        return () => {
            unsubscribe();
        }
    }, [postID]);

    const postComment = (event) => {
        event.preventDefault();
        db.collection("posts").doc(postID).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment('');
    }
    return (
        <div className='post'>
            <div className="post_header">
                <Avatar
                    className='post_avatar'
                    alt='MubashirIbrahim'
                    src={null}
                />
                <h2>{username}</h2>
            </div>
            <img
                className="post_img"
                src={imgUrl}
            />
            <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
            <div className='post__comments'>
                {
                    comments.map((comment) => (
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    ))
                }
            </div>
            {user &&
           ( <form className="post__commentBox">
                <input
                    className='post__input'
                    type="text"
                    placeholder="Add Comments..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button
                    className='post__Btn'
                    disabled={!comment}
                    type="submit"
                    onClick={postComment}
                >Post</button>
            </form>)
            }
        </div>
    )
}

export default Post
