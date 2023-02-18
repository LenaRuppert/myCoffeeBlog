import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BlogCard from "./component/BlogCard";
import {BlogEntry} from "./model/BlogEntry";
import BlogHeader from "./component/BlogHeader";
import BlogGallery from "./component/BlogGallery";
import AddBlogEntry from "./component/AddBlogEntry";


function App() {

    const[blogs, setBlogs] = useState<BlogEntry[]>([{id:"123", title:"test", author:"test", content:"test"}])



    function addBlog(newBlog: BlogEntry){
        setBlogs(prevState => [...prevState, newBlog])
    }

  return (
    <div className="App">
      <header className="App-header">
          <BlogHeader/>
      </header>

        <BlogGallery myBlogArray={blogs}/>

        <AddBlogEntry onAddBlog={addBlog}/>




    </div>
  );
}

export default App;
