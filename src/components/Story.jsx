import React from 'react';
import SingleStory from './SingleStory';
import "../App.css";
import StoryVotesComments from './StoryVotesComments';

const Story = () => {
    return (
        <div>
            <SingleStory />
            <StoryVotesComments />
        </div>
    );
};

export default Story;