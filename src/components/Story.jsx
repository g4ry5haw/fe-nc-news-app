import React from 'react';
import SingleStory from './SingleStory';
import "../App.css";
import StoryVotesComments from './StoryVotesComments';
import Comments from './Comments';

const Story = () => {
    return (
        <div>
            <div>
                <SingleStory />
                <StoryVotesComments />
            </div>
            <div className='comments'>
                <Comments />
            </div>
        </div>
    );
};

export default Story;