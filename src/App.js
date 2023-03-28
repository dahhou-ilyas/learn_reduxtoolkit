import './App.css';
import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import React from 'react';

function App() {
  return (
    <main className="App">
    <AddPostForm/>
    <PostsList/>
    </main>
  );
}

export default App;
