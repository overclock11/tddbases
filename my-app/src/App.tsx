import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getPost, newPost} from "./api/api";

function App() {
  const createPost = () => {
    const values = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    newPost(values)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            return json;
        })
        .catch((error: Error)=>{
          console.log(error);
        })
  }

  const getComment = () => {
    getPost().then((comment)=>{
      console.log(comment);
    })
  }

  return (
    <div className="App">
      <button onClick={getComment} data-testid={'get'}>get post</button>
      <button onClick={createPost} data-testid={'post'}>new post</button>
    </div>
  );
}

export default App;
