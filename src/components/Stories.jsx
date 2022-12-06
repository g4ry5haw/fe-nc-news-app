import React from 'react';
import {useState, useEffect} from 'react'
import "../App.css";
import { getArticles } from '../utils/api';

const Stories = () => {

const [stories, setStories] = useState([])

useEffect(()=> {
    getArticles().then((fetchedArticles) => {
        setStories(fetchedArticles);
    });
},[])

    return (
        <div className='articlesList'>
            {stories.map(({article_id, title, topic, body}) => {
                return (
                <div className='articlesList__article' key={article_id}>
                    <h4>{topic}</h4> 
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
            )})}
        </div>
    );

}

export default Stories