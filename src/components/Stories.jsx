import React from 'react';
import {useState, useEffect} from 'react'
import "../App.css";
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';

const Stories = () => {

const [stories, setStories] = useState([])

useEffect(()=> {
    getArticles().then((fetchedArticles) => {
        setStories(fetchedArticles);
    });
},[])

    return (
        <div className='storiesList'>
            {stories.map(({article_id, title, topic, body}) => {
                return (
                <div className='storiesList__story' key={article_id}>
                    <h4>{topic}</h4> 
                    <Link to={`/articles/${article_id}`}><h3>{title}</h3></Link>
                    <p>{body}</p>
                </div>
            )})}
        </div>
    );

}

export default Stories