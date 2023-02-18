import React from "react";
import {BlogEntry} from "../model/BlogEntry";
import BlogCard from "./BlogCard";
import "./BlogGallery.css"

type BlogGalleryProps = {
    myBlogArray: BlogEntry[]
}

export default function BlogGallery(props: BlogGalleryProps) {

    const blogGallery = props.myBlogArray.map((entry) => {
        return (
            <BlogCard blogEntry={entry} key={entry.title + " " + entry.content}/>
        )
    })


    return (
        <div className={"blog-gallery"}>
            <h3>Blogeinträge</h3>
            {blogGallery}
        </div>
    )
}




