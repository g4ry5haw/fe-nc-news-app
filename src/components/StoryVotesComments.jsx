import React from 'react';
import "../App.css";
import CommentCount from './CommentCount';
import VoteStoryAdder from './VoteStoryAdder';
import VoteStoryCount from './VoteStoryCount';

const StoryVotesComments = () => {
    return (
        <div className='storyVotesComments'>
            {/* <div className='votesTotal'>Total Votes</div>
            <div className='voteUpDown'>Vote up or down</div>
            <div className='commentCount'>Comments</div> */}
            <VoteStoryCount />
            <VoteStoryAdder />
            <CommentCount />
        </div>
    );
};

export default StoryVotesComments;