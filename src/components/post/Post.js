import React from 'react';

import './post.css';

const Post = ({post:{title, img, body, author}, i}) => (
        <div className="post-container">
            <img className="image" src={img} alt="post"/>
            <h1 className="heading">{title}</h1>
            <p>{body}</p>
            <div className="info">
                <h5>Article Number: {i + 1}</h5>
                <h4>Author: {author}</h4>
            </div>
        </div>
    );

export default Post