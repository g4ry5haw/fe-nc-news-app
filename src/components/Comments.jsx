import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "../App.css";
import { getArticleComments } from '../utils/api';

const Comments = () => {

const {article_id} = useParams()
const [comments, setComments] = useState([])
    
useEffect(()=> {
    getArticleComments(article_id).then((fetchedComments) => {
        setComments(fetchedComments);
    });
},[article_id])

    return (
        <div>
            <h3 id="comment-header">Comments</h3>    
            <div className='comments'>
                {comments.map(({comment_id, author, votes, body}) => {
                    return (
                    <div className='comment_single' key={comment_id}>
                        <h4>Author: {author}</h4> 
                        <p>{body}</p>
                        <p id="comment-votes">Votes: <strong>{votes}</strong></p>
                    </div>
                )})}
            </div>
        </div>
    );
};

export default Comments;