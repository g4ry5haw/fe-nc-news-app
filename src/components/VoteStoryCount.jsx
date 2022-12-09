import React from 'react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "../App.css";
import { getSingleArticle, patchVotesById } from '../utils/api';


const VoteStoryCount = ({votes}) => {

    const {article_id} = useParams()
    const [newVote, setNewVote] = useState(0)
    const [voteWorked, setVoteWorked] = useState(0)
    const [warning, setWarning] = useState('Submit vote')

    const handleStoryVoteIncrease = (article_id)=> {
        if (voteWorked === 0) {

            setNewVote((currCount) => {
                const newCount = currCount + 1
                return newCount
            })

            patchVotesById(article_id, 1).then(() => {
                setVoteWorked(1)
                setWarning('Thanks!')

            }).catch(()=> {
                setWarning('Please try again')
            })
        }

    }
    
    const handleStoryVoteDecrease = (article_id)=> {
        if (voteWorked === 0) {

            setNewVote((currCount) => {
                const newCount = currCount - 1
                return newCount
            })

            patchVotesById(article_id, -1).then(() => {
                setVoteWorked(1)
                setWarning('Thanks!')

            }).catch(()=> {
                setWarning('Please try again')
            })
        }

    }
    
    return (
        <div>
            Total Votes <strong>{+votes + newVote} </strong><span><button onClick={() => handleStoryVoteIncrease(article_id)}> ⬆️ </button> <button onClick={() => handleStoryVoteDecrease(article_id)}> ⬇️ </button></span>
            <p>---------------------</p>
            <p>{warning}</p>
        </div>
    );
}



export default VoteStoryCount;

// get votes from article.votes