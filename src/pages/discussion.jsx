import React, { useState } from 'react';
import './discussion.css'; 

const CommentForm = ({ onSubmit }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            onSubmit(text);
            setText("");  
        }
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                defaultSpot="say somthing!"
                rows="3"
            />
            <button type="submit">Post</button>
        </form>
    );
};


const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="comment-content">
                <div className="comment-author">{comment.username}</div>
                <div className="comment-text">{comment.body}</div>
                <div className="comment-time">{new Date(comment.createdAt).toLocaleString()}</div>
            </div>
        </div>
    );
};

const Discussion = () => {
    <div> <NavBar
        brandName=""
        imageSrcPath={logo}
        navItems={[
          { name: "Home", path: "/home" },
          { name: "Announcements", path: "/announcements" },
          { name: "Attendance", path: "/attendance" },
          { name: "Resources", path: "/resources" },
          { name: "Homework", path: "/homework" },
          { name: "Discussion", path: "/discussion"}
          
        ]}
      />
    const [comments, setComments] = useState([
        {
            id: 1,
            username: 'Sawyer',
            createdAt: Date.now(),
            body: 'Great Discussion!',
        },
        {
            id: 2,
            username: 'Jim',
            createdAt: Date.now(),
            body: 'I agree, very helpful!.',
        },
    ]);

    const addComment = (text) => {
        const newComment = {
            id: comments.length + 1,
            username: `User${comments.length + 1}`,
            createdAt: Date.now(),
            body: text,
        };
        setComments([...comments, newComment]);
    };

    return (
        <div className="discussion-board">
            <h1>App Dev Chat</h1>
            
            <div className="comments-container">
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
            <CommentForm onSubmit={addComment} />
        </div>
    );
};

export default Discussion;
