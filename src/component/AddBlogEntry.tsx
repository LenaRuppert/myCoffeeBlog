import React, {ChangeEvent, useState} from "react";
import "./AddBlogEntry.css"
import {BlogEntry} from "../model/BlogEntry";


type BlogEntryProps = {

    onAddBlog: (newBlog: BlogEntry) => void
}


    export default function AddBlogEntry(props: BlogEntryProps) {


        const [title, setTitle] =useState("")
        const [content, setContent]=useState("")
        const [author, setAuthor]=useState("")
        const [id, setId]=useState("")



        function onTitleChange(event: ChangeEvent<HTMLInputElement>){
            setTitle(event.target.value)
        }


        function onContentChange(event: ChangeEvent<HTMLInputElement>){
            setContent(event.target.value)
        }

        function onAuthorChange(event: ChangeEvent<HTMLInputElement>){
            setAuthor(event.target.value)
        }

        function onBlogEntrySave(){
            props.onAddBlog({id:"123", title, author, content})
        }



        return (

            <section className={"add-block-entry"}>
                <h4>Neuer Blogeintrag: https://handsonreact.com/docs/lists</h4>

                <div>

                <input value={title}  onChange={onTitleChange} placeholder={"Überschrift"}/>
                </div>
                <div>

                <input value={content} onChange={onContentChange} placeholder={"Blogeintrag"}/>
                </div>
                <div>

                <input value={author} onChange={onAuthorChange} placeholder={"Autor"}/>
                </div>
                <button onClick={onBlogEntrySave}>submit</button>
            </section>

        )



}