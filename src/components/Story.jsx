import React from 'react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import SingleStory from './SingleStory';
import "../App.css";
import { getSingleArticle } from '../utils/api';
import Comments from './Comments';
import VoteStoryCount from './VoteStoryCount';
import CommentCount from './CommentCount';

const Story = () => {

const {article_id} = useParams()
const [story, setStory] = useState([])

useEffect(()=> {
    getSingleArticle(article_id).then((fetchedArticle) => {
        setStory(fetchedArticle);
    });
},[article_id])

    return (
        <div>
            <div>
                <SingleStory story={story}/>
            </div>
            <div className='storyVotesComments'>
                <VoteStoryCount votes={story.votes}/>
                <CommentCount />
            </div>
            <div className='comments'>
                <Comments />
            </div>
        </div>
    );
};

export default Story;