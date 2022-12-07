import React from 'react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "../App.css";
import { getSingleArticle } from '../utils/api';

const SingleStory = () => {

const {article_id} = useParams()
const [story, setStory] = useState([])

useEffect(()=> {
    getSingleArticle(article_id).then((fetchedArticle) => {
        setStory(fetchedArticle);
    });
},[article_id])

const {topic, title, body} = story


    return (
        <div>
            <div className='singleArticle'>
                <h3>{topic}</h3>
                <h2>{title}</h2>
                <p>{body}</p> 
            </div>
        </div>
    );
};

export default SingleStory;